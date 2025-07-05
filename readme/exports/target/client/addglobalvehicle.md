---
description: Adds target options to all vehicles globally.
---

# AddGlobalVehicle

**Syntax:**

```
Bridge.Target.AddGlobalVehicle(options)
```

**Parameters:**

* `options` (table) - Array of target option configurations

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.AddGlobalVehicle({
    {
        label = "Lock/Unlock Vehicle",
        icon = "fas fa-key",
        onSelect = function(entity)
            -- Add your lock/unlock logic here
            print("Toggling vehicle lock for: " .. entity)
        end
    }
})
```
