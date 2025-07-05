---
description: Gets the phone number of a specific player.
---

# GetPlayerPhone

**Syntax:**

```
Bridge.Phone.GetPlayerPhone(src)
```

**Parameters:**

* `src` (number) - Player server ID

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
local phoneNumber = Bridge.Phone.GetPlayerPhone(source)
if phoneNumber then
    print("Player's phone number: " .. phoneNumber)
else
    print("Phone number not available")
end
```
