# ToggleDoorLock

```lua
local Bridge = exports.community_bridge:Bridge()

---This will toggle the lock status of the door.
---@param doorID string
---@param toggle boolean
---@return boolean

local thisDoor = Bridge.Doorlock.ToggleDoorLock(doorID, toggle)

print(tostring(thisDoor))  -- will return boolean based on success
```
