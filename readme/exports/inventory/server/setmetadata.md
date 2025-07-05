---
description: Sets metadata for a specific item in player inventory.
---

# SetMetadata

**Syntax:**

```
Bridge.Inventory.SetMetadata(src, slot, metadata)
```

**Parameters:**

* `src` (number) - Player server ID
* `slot` (number) - Inventory slot
* `metadata` (table) - Metadata to set

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Inventory.SetMetadata(source, 1, {durability = 50})
```
