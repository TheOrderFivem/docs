---
description: Server-side function to get item image path.
---

# GetImagePath

**Syntax:**

```
Bridge.Inventory.GetImagePath(item)
```

**Parameters:**

* `item` (string) - Item name

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local imagePath = Bridge.Inventory.GetImagePath("lockpick")
```
