---
description: Opens a created shop for a specific player.
---

# OpenShop

**Syntax:**

```
Bridge.Shops.OpenShop(src, shopTitle)
```

**Parameters:**

* `src` (number) - Player server ID
* `shopTitle` (string) - Name of the shop to open

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Open shop for player
local success = Bridge.Shops.OpenShop(source, "247_store_1")
if success then
    print("Shop opened for player " .. source)
else
    print("Failed to open shop")
end
```
