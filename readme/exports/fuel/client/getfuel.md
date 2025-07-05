---
description: Gets the current fuel level of a vehicle.
---

# GetFuel

**Syntax:**

```
Bridge.Fuel.GetFuel(vehicle)
```

**Parameters:**

* `vehicle` (number) - Vehicle entity handle

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Get fuel level of current vehicle
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
if vehicle ~= 0 then
    local fuelLevel = Bridge.Fuel.GetFuel(vehicle)
    print("Vehicle fuel level: " .. fuelLevel .. "%")
end
```
