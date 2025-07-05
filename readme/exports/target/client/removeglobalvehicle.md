---
description: Removes target options from all vehicles.
---

# RemoveGlobalVehicle

**Syntax:**

```
Bridge.Target.RemoveGlobalVehicle(options)
```

**Parameters:**

* `options` (table) - Array of target options to remove (by name)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.RemoveGlobalVehicle({
    {name = "Lock/Unlock Vehicle"}
})
```
