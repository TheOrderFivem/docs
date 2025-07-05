---
description: >-
  Creates a new shop that can be opened by players. Used as fallback when
  inventory systems don't support shops.
---

# CreateShop

**Syntax:**

```
Bridge.Shops.CreateShop(shopTitle, shopInventory, shopCoords, shopGroups)
```

**Parameters:**

* `shopTitle` (string) - Unique name/title for the shop
* `shopInventory` (table) - Table of items with prices and labels
* `shopCoords` (table) - Coordinates where the shop is located
* `shopGroups` (table) - Job groups that can access this shop

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Create a general store
local inventory = {
    {name = "water", label = "Water Bottle", price = 10},
    {name = "sandwich", label = "Sandwich", price = 25},
    {name = "energy_drink", label = "Energy Drink", price = 15}
}
local coords = vector3(25.7, -1347.3, 29.49)
Bridge.Shops.CreateShop("247_store_1", inventory, coords)
```
