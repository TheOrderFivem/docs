---
description: Removes target options from specific local entities.
---

# RemoveLocalEntity

**Syntax:**

```
Bridge.Target.RemoveLocalEntity(entities, optionNames)
```

**Parameters:**

* `entities` (number|table) - Entity handle or array of entity handles
* `optionNames` (string|table) - Option name(s) to remove, or nil to remove all

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.RemoveLocalEntity(entity, "Use ATM")
```
