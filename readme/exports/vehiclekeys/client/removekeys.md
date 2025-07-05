---
description: Removes the player's keys to a specific vehicle.
---

# RemoveKeys

**Syntax:**

```
Bridge.VehicleKey.RemoveKeys(vehicle, plate)
```

**Parameters:**

* `vehicle` (number) - Vehicle entity handle
* `plate` (string) - License plate of the vehicle

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Remove keys from current vehicle
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
if vehicle ~= 0 then
    local plate = GetVehicleNumberPlateText(vehicle)
    Bridge.VehicleKey.RemoveKeys(vehicle, plate)
    print("Removed keys from vehicle: " .. plate)
en
```
