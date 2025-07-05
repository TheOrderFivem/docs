---
description: Removes an item from a player's inventory.
---

# RemoveItem

**Syntax:**

```
Bridge.Inventory.RemoveItem(src, item, count, slot, metadata)
```

**Parameters:**

* `src` (number) - Player server ID
* `item` (string) - Name of the item
* `count` (number) - Amount to remove
* `slot` (number) - Specific slot to remove from
* `metadata` (table) - Specific item metadata to match

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
-- Remove 2 water bottles
local success = Bridge.Inventory.RemoveItem(source, "water", 2)
if success then
    print("Removed water from inventory")
else
    print("Failed to remove water")
end
```
