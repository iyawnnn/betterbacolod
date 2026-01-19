# Setting Up Claude CLI Hooks

> **Enable automatic context loading for Claude Code sessions**

## What Are Hooks?

Hooks are shell scripts that run automatically at specific points in your Claude Code workflow:

- **session-start**: Runs when a new Claude session starts
- **user-prompt-submit**: Runs before sending user prompts
- **tool-call**: Runs before/after tool executions

## Quick Setup

### 1. Check if .kiro directory exists

```bash
ls -la .kiro/
```

If it exists, you're using Kiro (Claude's predecessor). If not, you're using Claude Code.

### 2. For Claude Code

Create or edit your Claude Code settings file:

**Location:** `~/.config/claude-code/settings.json`

Add this configuration:

```json
{
  "hooks": {
    "sessionStart": {
      "command": "${workspaceFolder}/.claude/hooks/session-start.sh",
      "enabled": true
    }
  }
}
```

### 3. For Kiro (legacy)

If using Kiro, create: `.kiro/settings/hooks.json`

```json
{
  "hooks": {
    "session_start": {
      "command": "./.claude/hooks/session-start.sh",
      "enabled": true
    }
  }
}
```

### 4. Make hooks executable

```bash
chmod +x .claude/hooks/session-start.sh
```

### 5. Test the hook

```bash
bash .claude/hooks/session-start.sh
```

You should see the context summary output.

## Advanced: Project-Specific Hooks

You can also configure hooks at the project level.

### Create `.claude/settings.json` in your project:

```json
{
  "hooks": {
    "sessionStart": {
      "command": "./.claude/hooks/session-start.sh",
      "enabled": true,
      "description": "Load Bacolod project context"
    },
    "userPromptSubmit": {
      "command": "./.claude/hooks/validate-prompt.sh",
      "enabled": false,
      "description": "Validate user prompts (disabled by default)"
    }
  },
  "context": {
    "autoLoad": [".claude/CONTEXT.md", ".claude/ACTIVE-PHASE.md"]
  }
}
```

## Hook Development Tips

### Session Start Hook Structure

```bash
#!/bin/bash

# 1. Output context summary (what Claude sees)
cat <<EOF
Context information here
EOF

# 2. Optionally load file contents
# cat .claude/CONTEXT.md

# 3. Keep output minimal (<500 tokens)
```

### Best Practices

1. **Keep it fast** - Hooks run on every session start
2. **Keep output minimal** - Less than 500 tokens ideal
3. **Use cat <<EOF for formatting** - Clean multiline output
4. **Test independently** - Run `bash hook.sh` to verify
5. **Handle errors gracefully** - Don't break Claude sessions

### Example: Conditional Context Loading

```bash
#!/bin/bash

PHASE_FILE=".claude/ACTIVE-PHASE.md"

# Check if there's an active phase
if grep -q "Status: In Progress" "$PHASE_FILE"; then
    echo "📍 Active Phase Detected"
    grep "Current Phase:" "$PHASE_FILE"
    echo ""
    echo "Tasks:"
    grep "- \[ \]" "$PHASE_FILE" | head -5
else
    echo "✅ No active phase - Ready for new tasks"
fi
```

## Troubleshooting

### Hook not running?

1. **Check file permissions:**

   ```bash
   ls -l .claude/hooks/session-start.sh
   # Should show: -rwxr-xr-x
   ```

2. **Verify settings path:**

   ```bash
   # For Claude Code
   cat ~/.config/claude-code/settings.json

   # For Kiro
   cat .kiro/settings/hooks.json
   ```

3. **Test hook manually:**

   ```bash
   bash .claude/hooks/session-start.sh
   # Should output context without errors
   ```

4. **Check Claude Code logs:**
   ```bash
   # Logs location varies by platform
   # macOS: ~/Library/Logs/claude-code/
   # Linux: ~/.local/share/claude-code/logs/
   ```

### Hook runs but context not loaded?

- Verify output is showing in Claude's initial message
- Check that output doesn't exceed token limits
- Ensure files referenced in hook exist

### Errors in hook script?

- Add `set -e` at top to exit on errors
- Use `2>&1` to capture error output
- Test with `bash -x` for debugging: `bash -x .claude/hooks/session-start.sh`

## Context Auto-Loading (Alternative to Hooks)

If hooks don't work, use Claude Code's context auto-loading:

### .claude/settings.json

```json
{
  "context": {
    "autoLoad": [".claude/CONTEXT.md", ".claude/ACTIVE-PHASE.md"],
    "maxTokens": 1000
  }
}
```

This loads specified files automatically at session start.

## Verifying Hook Installation

### 1. Start a new Claude session

```bash
claude-code chat
# or just: claude
```

### 2. Check first message

You should see:

```
📋 **Bacolod Project Context Loaded**

Project: BetterLocalGov Bacolod customization
...
```

### 3. If not showing

- Check settings file location
- Verify hook is executable
- Test hook manually
- Check Claude Code version

## Migration from Kiro to Claude Code

If you're migrating from Kiro:

1. **Copy hook settings:**

   ```bash
   # Old: .kiro/settings/hooks.json
   # New: ~/.config/claude-code/settings.json
   ```

2. **Update command paths:**

   ```json
   // Old (Kiro)
   "command": "./.claude/hooks/session-start.sh"

   // New (Claude Code)
   "command": "${workspaceFolder}/.claude/hooks/session-start.sh"
   ```

3. **Test in Claude Code:**
   ```bash
   claude-code chat
   ```

## Additional Hooks (Future)

### Prompt Validation Hook

Create `.claude/hooks/validate-prompt.sh`:

```bash
#!/bin/bash

# Read user prompt from stdin
PROMPT="$1"

# Check for source citations when updating content
if echo "$PROMPT" | grep -qi "update.*content"; then
    if ! echo "$PROMPT" | grep -qi "source"; then
        echo "⚠️ Remember to cite sources from .claude/DATA-SOURCES.md"
    fi
fi
```

### Commit Message Hook

Create `.claude/hooks/pre-commit.sh`:

```bash
#!/bin/bash

# Check if content files changed
if git diff --cached --name-only | grep -q "content/services/"; then
    echo "✅ Content files changed - Remember to:"
    echo "   1. Add source citation"
    echo "   2. Test on localhost:5173"
    echo "   3. Update ACTIVE-PHASE.md if phase complete"
fi
```

---

**Last Updated:** 2026-01-08
**For Help:** See `.claude/README.md` or Claude Code docs
