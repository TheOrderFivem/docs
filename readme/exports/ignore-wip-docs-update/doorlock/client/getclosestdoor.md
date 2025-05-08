---
description: This will get the closest door to the ped if nearby
---

# GetClosestDoor

```lua
local Bridge = exports.community_bridge:Bridge()
---This will get the closest door to the ped
---@return string | nil
local thisDoor = Bridge.Doorlock.GetClosestDoor()
```

```lua
-- Example

RegisterCommand("getClosestDoor", function()
    ---This will get the closest door to the ped
    ---@return string | nil
    local thisDoor = Bridge.Doorlock.GetClosestDoor()
    if not thisDoor then return print("No nearby door") end
    print("This door: " .. thisDoor) -- ie "1"
end, false)
```
