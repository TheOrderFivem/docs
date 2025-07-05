---
description: Returns the name of the currently active fuel system.
---

# GetResourceName

**Syntax:**

```
Bridge.Fuel.GetResourceName()
```

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
local fuelSystem = Bridge.Fuel.GetResourceName()
print("Using fuel system: " .. fuelSystem)
```
