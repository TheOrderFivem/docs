---
description: Gives the player keys to a specific vehicle.
---

# Givekeys

**Syntax:**

```
Bridge.VehicleKey.GiveKeys(vehicle, plate)
```

**Parameters:**

* `vehicle` (number) - Vehicle entity handle
* `plate` (string) - License plate of the vehicle

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Get vehicle
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
if vehicle ~= 0 then
    local plate = GetVehicleNumberPlateText(vehicle)
    Bridge.VehicleKey.GiveKeys(vehicle, plate)
    print("Given keys to vehicle: " .. plate)
end
```
