---
description: Returns the player's entire inventory in a standardized format.
---

# GetPlayerInventory

**Syntax:**

```
Bridge.Inventory.GetPlayerInventory()
```

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local inventory = Bridge.Inventory.GetPlayerInventory()
for i, item in pairs(inventory) do
    print(item.label .. " x" .. item.count)
end
```
