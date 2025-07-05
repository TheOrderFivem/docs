---
description: This will return the vehicle properties
---

# GetVehicleProperties

**Syntax:**

```
Bridge.Framework.GetVehicleProperties(vehicle)
```

**Parameters:**

* `vehicle` (number) - Vehicle entity handle

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local props = Bridge.Framework.GetVehicleProperties(vehicle)
print('Plate:', props.plate)
```
