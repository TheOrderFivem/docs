---
description: Registers a new stash inventory.
---

# RegisterStash

**Syntax:**

```
Bridge.Inventory.RegisterStash(id, label, slots, weight, owner, jobs, gangs)
```

📋

**Parameters:**

* `id` (string) - Unique stash identifier
* `label` (string) - Display name for the stash
* `slots` (number) - Number of inventory slots
* `weight` (number) - Maximum weight capacity
* `owner` (string) - Owner identifier
* `jobs` (table) - Allowed jobs
* `gangs` (table) - Allowed gangs

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Inventory.RegisterStash("police_evidence", "Evidence Locker", 50, 100000, nil, {"police"}, nil)
```
