---
description: Registers a new shop with the inventory system.
---

# RegisterShop

**Syntax:**

```
Bridge.Inventory.RegisterShop(shopData)
```

**Parameters:**

* `shopData` (table) - Shop configuration data

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local shopData = {
    name = "General Store",
    items = {{item = "water", price = 10}}
}
Bridge.Inventory.RegisterShop(shopData)
```
