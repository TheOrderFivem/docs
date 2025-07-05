---
description: Gets the name of the currently active phone system.
---

# GetPhoneName

**Syntax:**

```
Bridge.Phone.GetPhoneName()
```

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
local phoneSystem = Bridge.Phone.GetPhoneName()
print("Using phone system: " .. phoneSystem)
```
