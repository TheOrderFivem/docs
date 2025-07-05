---
description: Server-side function to get a player's complete inventory.
---

# GetPlayerInventory

**Syntax:**

```
Bridge.Inventory.GetPlayerInventory(src)
```

**Parameters:**

* `src` (number) - Player server ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local inventory = Bridge.Inventory.GetPlayerInventory(source)
```
