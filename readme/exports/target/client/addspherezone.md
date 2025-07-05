---
description: Creates a spherical target zone at specified coordinates.
---

# AddSphereZone

**Syntax:**

```
Bridge.Target.AddSphereZone(name, coords, radius, heading, options)
```

**Parameters:**

* `name` (string) - Unique name for the zone
* `coords` (table) - Center coordinates of the sphere (vector3)
* `radius` (number) - Radius of the sphere
* `heading` (number) - Rotation heading (may not apply to all systems)
* `options` (table) - Array of target option configurations

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
local coords = vector3(150.0, 250.0, 30.0)
local zoneId = Bridge.Target.AddSphereZone("atm_zone", coords, 1.5, 0.0, {
    {
        label = "Use ATM",
        icon = "fas fa-credit-card",
        onSelect = function()
            -- Open ATM interface
        end
    }
})
```
