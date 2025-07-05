---
description: Displays a help text message on the screen at the specified position.
---

# ShowHelpText

**Syntax:**

```
Bridge.HelpText.ShowHelpText(message, position)
```

**Parameters:**

* `message` (string) - The help text message to display
* `position` (string) - Position on screen (top, center, bottom, etc.)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Show help text at default position
Bridge.HelpText.ShowHelpText("Press [E] to interact")
-- Show help text at specific position
Bridge.HelpText.ShowHelpText("Hold [F] to enter vehicle", "center")
```
