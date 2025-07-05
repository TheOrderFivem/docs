---
description: >-
  Gets the count of an item in a player's inventory, with optional metadata
  matching.
---

# GetItemCount

**Syntax:**

```
Bridge.Inventory.GetItemCount(src, item, metadata)
```

**Parameters:**

* `src` (number) - Player server ID
* `item` (string) - Name of the item
* `metadata` (table) - Specific item metadata to match

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
-- Get count of lockpicks
local count = Bridge.Inventory.GetItemCount(source, "lockpick")
print("Player has " .. count .. " lockpicks")
```
