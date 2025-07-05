---
description: Opens a stash interface for the player.
---

# OpenStash

**Syntax:**

```
Bridge.Inventory.OpenStash(stashId)
```

**Parameters:**

* `stashId` (string) - Unique identifier for the stash

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Inventory.OpenStash("police_evidence")
```
