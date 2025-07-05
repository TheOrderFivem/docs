---
description: Adds an item to a player's inventory with optional metadata.
---

# AddItem

**Syntax:**

```
Bridge.Inventory.AddItem(src, item, count, slot, metadata)
```

**Parameters:**

* `src` (number) - Player server ID
* `item` (string) - Name of the item
* `count` (number) - Amount to add
* `slot` (number) - Specific slot to add to
* `metadata` (table) - Additional item metadata

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
-- Add 1 phone with metadata
local success = Bridge.Inventory.AddItem(source, "phone", 1, nil, { number = "555-123-4567" })
if success then
    print("Added phone to inventory")
else
    print("Failed to add phone")
end
```
