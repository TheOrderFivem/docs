# SetFuel

```lua
local Bridge = exports.community_bridge:Bridge()

---This will set the fuel level of the vehicle.
---@param vehicle number The vehicle entity ID.
---@param fuel number The fuel level to set.
---@return nil

local myVehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local fuel = 100
Bridge.Fuel.SetFuel(myVehicle, fuel)
```

