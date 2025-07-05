---
description: Toggles the lock state of a specific door by its ID.
---

# ToggleDoorLock

**Syntax:**

```
Bridge.Doorlock.ToggleDoorLock(doorID, toggle)
```

**Parameters:**

* `doorID` (string) - Unique identifier of the door to toggle
* `toggle` (boolean) - True to lock the door, false to unlock

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Lock a door
local success = Bridge.Doorlock.ToggleDoorLock("police_station_main", true)
if success then
    print("Police station main door locked")
end
-- Unlock a door
Bridge.Doorlock.ToggleDoorLock("hospital_entrance", false)
print("Hospital entrance unlocked")
```
