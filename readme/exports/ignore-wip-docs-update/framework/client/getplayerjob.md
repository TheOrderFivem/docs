# GetPlayerJob

```lua
local Bridge = exports.community_bridge:Bridge()


---This will return the players job name, job label, job grade name and job grade level.
---@return string
---@return string
---@return string
---@return string

local playerjobname, playerjoblabel, playerjobgradename, playerjobgradelevel = Bridge.Framework.GetPlayerJob()
print(playerjobname) -- police
print(playerjoblabel) -- Police
print(playerjobgradename) -- Lieutenant
print(playerjobgradelevel) -- 3
```
