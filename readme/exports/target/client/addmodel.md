---
description: Adds target options to all entities of specified model(s).
---

# AddModel

**Syntax:**

```
Bridge.Target.AddModel(models, options)
```

**Parameters:**

* `models` (number|table) - Model hash or array of model hashes
* `options` (table) - Array of target option configurations

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.AddModel(GetHashKey("prop_gas_pump_1a"), {
    {
        label = "Refuel Vehicle",
        icon = "fas fa-gas-pump",
        onSelect = function(entity)
            -- Start refueling process
        end
    }
})
```
