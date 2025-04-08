# RegisterUsableItem

```
local Bridge = exports.community_bridge:Bridge()

local playerVehicles = Bridge.Framework.RegisterUsableItem(itemName, cb)


--- example

Bridge.Framework.RegisterUsableItem("SomeCoolItem", function(src, itemData)
    print(json.encode(itemData))
end)
```
