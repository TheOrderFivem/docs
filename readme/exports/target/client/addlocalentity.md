---
description: Adds target options to specific local entities.
---

# AddLocalEntity

**Syntax:**

```
Bridge.Target.AddLocalEntity(entities, options)
```

**Parameters:**

* `entities` (number|table) - Entity handle or array of entity handles
* `options` (table) - Array of target option configurations

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local entity = GetClosestObjectOfType(coords, 5.0, GetHashKey("prop_atm_01"), false)
Bridge.Target.AddLocalEntity(entity, {
    {
        label = "Use ATM",
        icon = "fas fa-credit-card",
        onSelect = function()
            -- Open ATM menu
        end
    }
})
```
