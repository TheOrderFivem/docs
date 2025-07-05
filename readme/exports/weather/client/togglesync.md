---
description: Toggles the player's weather and time synchronization on or off.
---

# ToggleSync

**Syntax:**

```
Bridge.Weather.ToggleSync(toggle)
```

**Parameters:**

* `toggle` (boolean) - True to enable sync, false to disable

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Enable weather sync for player
Bridge.Weather.ToggleSync(true)
-- Disable weather sync(player keeps current weather/time)
Bridge.Weather.ToggleSync(false)
```
