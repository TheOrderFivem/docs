---
description: Checks if a player can carry additional items without exceeding weight limits.
---

# CanCarryItem

**Syntax:**

```
Bridge.Inventory.CanCarryItem(src, item, count)
```

**Parameters:**

* `src` (number) - Player server ID
* `item` (string) - Name of the item
* `count` (number) - Amount to check

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
if Bridge.Inventory.CanCarryItem(source, "gold_bar", 5) then
    print("Player can carry 5 gold bars")
else
    print("Player cannot carry that much weight")
end
```
