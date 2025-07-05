---
description: Server-side function to open a stash for a player.
---

# OpenStash

**Syntax:**

```
Bridge.Inventory.OpenStash(src, stashId)
```

**Parameters:**

* `src` (number) - Player server ID
* `stashId` (string) - Stash identifier

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Inventory.OpenStash(source, "police_evidence")
```
