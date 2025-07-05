---
description: Gets the name of the currently active notification system.
---

# GetResourceName

**Syntax:**

```
Bridge.Notify.GetResourceName()
```

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
local notifySystem = Bridge.Notify.GetResourceName()
print("Using notification system: " .. notifySystem)
```
