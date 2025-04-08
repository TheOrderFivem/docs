# GetFuel

```
local Bridge = exports.community_bridge:Bridge()


local myVehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local fuelLevel = Bridge.Fuel.GetFuel(myVehicle)

print(fuelLevel) -- returns the fuel level in the vehicle
```
