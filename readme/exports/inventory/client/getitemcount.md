---
description: Returns the count of a specific item in the player's inventory.
---

# GetItemCount

**Syntax:**

```
Bridge.Inventory.GetItemCount(item)
```

**Parameters:**

* `item` (string) - Name of the item

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local waterCount = Bridge.Inventory.GetItemCount("water")
print("Player has " .. waterCount .. " water bottles")
```
