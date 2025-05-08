# ToggleDoorLock

```lua
local Bridge = exports.community_bridge:Bridge()
---This will toggle the lock status of the door.
---@param doorID string
---@param toggle boolean
---@return boolean
local thisDoor = Bridge.Doorlock.ToggleDoorLock(doorID, toggle)
```

```lua
-- Example

RegisterCommand("toggledoor", function()
    local src = source
    local myCoolDoorID = "1"
    local toggle = true -- or false to unlock the door
    local thisDoor = Bridge.Doorlock.ToggleDoorLock(myCoolDoorID, toggle)
    print(tostring(thisDoor))
end, false)
```
