# GetOwnedVehicles

```lua
local Bridge = exports.community_bridge:Bridge()

---This will get all owned vehicles for the player
---@param src number
---@return table

local playerVehicles = Bridge.Framework.GetOwnedVehicles(src)
print(json.encode(playerVehicles))
```
