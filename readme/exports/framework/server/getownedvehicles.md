# GetOwnedVehicles

**Syntax:**

```
Bridge.Framework.GetOwnedVehicles(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local vehicles = Bridge.Framework.GetOwnedVehicles(source)
for _, vehicle in pairs(vehicles) do
    print('Vehicle:', vehicle.vehicle, 'Plate:', vehicle.plate)
end
```
