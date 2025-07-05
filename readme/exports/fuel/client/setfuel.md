---
description: >-
  Sets the fuel level of a vehicle. Some systems add fuel, others set absolute
  values.
---

# SetFuel

**Syntax:**

```
Bridge.Fuel.SetFuel(vehicle, fuel, type)
```

**Parameters:**

* `vehicle` (number) - Vehicle entity handle
* `fuel` (number) - Fuel amount (0.0 to 100.0 or amount to add)
* `type` (string) - Fuel type (for systems that support multiple fuel types)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Set vehicle fuel to 75%
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
if vehicle ~= 0 then
    Bridge.Fuel.SetFuel(vehicle, 75.0)
    print("Set vehicle fuel to 75%")
end
-- Add 25 units of fuel
Bridge.Fuel.SetFuel(vehicle, 25.0)
```
