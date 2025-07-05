---
description: >-
  Gets the image path for a specific item, with fallback to a default
  placeholder if not found.
---

# GetImagePath

**Syntax:**

```
Bridge.Inventory.GetImagePath(item)
```

**Parameters:**

* `item` (string) - Name of the item

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local imagePath = Bridge.Inventory.GetImagePath("lockpick")
print("Lockpick image: " .. imagePath)
```
