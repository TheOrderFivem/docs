---
description: Gets an item from a specific inventory slot.
---

# GetItemBySlot

**Syntax:**

```
Bridge.Inventory.GetItemBySlot(src, slot)
```

**Parameters:**

* `src` (number) - Player server ID
* `slot` (number) - Inventory slot number

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local item = Bridge.Inventory.GetItemBySlot(source, 1)
```
