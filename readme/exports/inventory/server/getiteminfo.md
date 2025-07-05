---
description: Server-side function to get detailed item information.
---

# GetItemInfo

**Syntax:**

```
Bridge.Inventory.GetItemInfo(item)
```

**Parameters:**

* `item` (string) - Item name

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local itemInfo = Bridge.Inventory.GetItemInfo("lockpick")
```
