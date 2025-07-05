---
description: Server-side function to check if a player has a specific item.
---

# HasItem

**Syntax:**

```
Bridge.Inventory.HasItem(src, item)
```

**Parameters:**

* `src` (number) - Player server ID
* `item` (string) - Item name

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
if Bridge.Inventory.HasItem(source, "lockpick") then
    print("Player has a lockpick")
end
```
