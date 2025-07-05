---
description: Adds multiple items to a vehicle trunk inventory.
---

# AddTrunkItems

**Syntax:**

```
Bridge.Inventory.AddTrunkItems(identifier, items)
```

**Parameters:**

* `identifier` (string) - Vehicle plate or unique identifier
* `items` (table) - Array of items to add: {item, count, metadata}

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local items = {
    {item = "water", count = 5},
    {item = "bread", count = 3}
}
local success = Bridge.Inventory.AddTrunkItems("ABC123", items)
```
