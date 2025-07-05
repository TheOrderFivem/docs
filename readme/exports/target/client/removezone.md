---
description: Removes a target zone by name.
---

# RemoveZone

**Syntax:**

```
Bridge.Target.RemoveZone(name)
```

**Parameters:**

* `name` (string) - Name of the zone to remove

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.RemoveZone("shop_entrance")
```
