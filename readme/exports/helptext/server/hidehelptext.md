---
description: Hides help text for a specific player.
---

# HideHelpText

**Syntax:**

```
Bridge.HelpText.HideHelpText(src)
```

**Parameters:**

* `src` (number) - Player server ID to hide help text for

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Hide help text for specific player
Bridge.HelpText.HideHelpText(source)
```
