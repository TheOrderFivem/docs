---
description: Retrieves a player's appearance data in a standardized format.
---

# GetAppearance

**Syntax:**

```
Bridge.Clothing.GetAppearance(src, fullData)
```

**Parameters:**

* `src` (number) - Player server ID
* `fullData` (boolean) - If true, returns full data including model and raw skin data

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Get basic appearance data
local appearance = Bridge.Clothing.GetAppearance(source)
if appearance then
    print("Player appearance loaded")
end
-- Get full appearance data including model
local fullData = Bridge.Clothing.GetAppearance(source, true)
if fullData then
    print("Player model: " .. fullData.model)
end
```
