---
description: Creates a box-shaped target zone at specified coordinates.
---

# AddBoxZone

**Syntax:**

```
Bridge.Target.AddBoxZone(name, coords, size, heading, options, debug)
```

**Parameters:**

* `name` (string) - Unique name for the zone
* `coords` (table) - Center coordinates of the box (vector3)
* `size` (table) - Size of the box {length, width, height}
* `heading` (number) - Rotation heading of the box
* `options` (table) - Array of target option configurations
* `debug` (boolean) - Whether to show debug visualization

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
local coords = vector3(100.0, 200.0, 30.0)
local zoneId = Bridge.Target.AddBoxZone("shop_entrance", coords, {2.0, 2.0, 2.0}, 0.0, {
    {
        label = "Enter Shop",
        icon = "fas fa-shopping-cart",
        onSelect = function()
            -- Open shop menu
        end
    }
}, true)
```
