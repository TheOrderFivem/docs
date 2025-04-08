# SetFuel

```
local Bridge = exports.community_bridge:Bridge()


local myVehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local fuel = 100
-- type of fuel is optional but is there just in case (for some fuel systems, it will defualt without the param)
Bridge.Fuel.SetFuel(myVehicle , fuel, type)
```

