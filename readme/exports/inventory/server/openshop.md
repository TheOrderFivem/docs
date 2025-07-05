---
description: Server-side function to open a shop for a player.
---

# OpenShop

**Syntax:**

```
Bridge.Inventory.OpenShop(src, shopId)
```

**Parameters:**

* `src` (number) - Player server ID
* `shopId` (string) - Shop identifier

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Inventory.OpenShop(source, "general_store")
```
