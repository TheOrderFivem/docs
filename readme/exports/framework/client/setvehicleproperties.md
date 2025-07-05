---
description: This will set the vehicles properties
---

# SetVehicleProperties

**Syntax:**

```
Bridge.Framework.SetVehicleProperties(vehicle, properties)
```

**Parameters:**

* `vehicle` (number) - Vehicle entity handle
* `properties` (table) - Properties to apply

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)
local props = { plate = 'BRIDGE1' }
Bridge.Framework.SetVehicleProperties(vehicle, props)
```
