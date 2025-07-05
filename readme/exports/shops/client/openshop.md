---
description: Opens a registered shop interface for the player.
---

# OpenShop

**Syntax:**

```
Bridge.Shops.OpenShop(shopTitle, inventory)
```

**Parameters:**

* `shopTitle` (string) - The title/name of the shop to display
* `inventory` (table) - Table of items available in the shop

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- This is typically called internally when inventory doesn't support shops
local shopItems = {
    {name = "water", label = "Water Bottle", price = 10},
    {name = "bread", label = "Bread", price = 5}
}
Bridge.Shops.OpenShop("General Store", shopItems)
```
