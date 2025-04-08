# GetFuel

```lua
local Bridge = exports.community_bridge:Bridge()

---This will get the fuel level of the vehicle.
---@param vehicle number The vehicle entity ID.
---@return number fuel The fuel level of the vehicle.
local myVehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local fuelLevel = Bridge.Fuel.GetFuel(myVehicle)

print(fuelLevel) -- returns the fuel level in the vehicle
```
