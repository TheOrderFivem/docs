# RegisterUsableItem

```lua
local Bridge = exports.community_bridge:Bridge()

local playerVehicles = Bridge.Framework.RegisterUsableItem(itemName, cb)


-- Framework.RegisterUsableItem(item, cb)
-- Registers a usable item with a callback function.
--- example

Bridge.Framework.RegisterUsableItem("SomeCoolItem", function(src, itemData)
    print(json.encode(itemData))
end)
```
