---
description: Gets detailed information about a specific item from the inventory system.
---

# GetItemInfo

**Syntax:**

```
Bridge.Inventory.GetItemInfo(item)
```

**Parameters:**

* `item` (string) - Name of the item

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local itemInfo = Bridge.Inventory.GetItemInfo("phone")
if itemInfo then
    print("Item label: " .. itemInfo.label)
    print("Item weight: " .. itemInfo.weight)
end
```
