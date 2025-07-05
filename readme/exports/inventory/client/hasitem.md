---
description: Checks if the player has a specific item in their inventory.
---

# HasItem

**Syntax:**

```
Bridge.Inventory.HasItem(item)
```

**Parameters:**

* `item` (string) - Name of the item

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
if Bridge.Inventory.HasItem("lockpick") then
    print("Player has a lockpick")
else
    print("Player doesn't have a lockpick")
end
```
