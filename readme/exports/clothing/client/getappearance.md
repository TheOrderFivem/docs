---
description: Retrieves a player's appearance data in a standardized format.
---

# GetAppearance

**Syntax:**

```
Bridge.Clothing.GetAppearance(entity)
```

**Parameters:**

* `data` (number) - Entity id

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Get basic appearance data
local appearance = Bridge.Clothing.GetAppearance(source)
if appearance then
    print("Player appearance data"..json.encode(appearance))
end
```
