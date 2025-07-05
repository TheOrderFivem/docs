---
description: Removes all target options from a specific model.
---

# RemoveModel

**Syntax:**

```
Bridge.Target.RemoveModel(model)
```

**Parameters:**

* `model` (number) - Model hash to remove targets from

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.RemoveModel(GetHashKey("prop_gas_pump_1a"))
```
