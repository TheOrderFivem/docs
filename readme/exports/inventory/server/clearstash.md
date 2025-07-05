---
description: Clears all items from a specific stash inventory.
---

# ClearStash

**Syntax:**

```
Bridge.Inventory.ClearStash(id, type)
```

**Parameters:**

* `id` (string) - Stash identifier
* `type` (string) - Type of stash

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Inventory.ClearStash("evidence_locker", "stash")
```
