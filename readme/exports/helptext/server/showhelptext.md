---
description: Shows help text to a specific player.
---

# ShowHelpText

**Syntax:**

```
Bridge.HelpText.ShowHelpText(src, message, position)
```

**Parameters:**

* `src` (number) - Player server ID to show help text to
* `message` (string) - The help text message to display
* `position` (string) - Position on screen (top, center, bottom, etc.)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Show help text to specific player
Bridge.HelpText.ShowHelpText(source, "Welcome! Press [F1] for help")
-- Show help text at bottom of screen
Bridge.HelpText.ShowHelpText(source, "You are now in a safe zone", "bottom")
```
