# GetPlayerJob

```lua
local Bridge = exports.community_bridge:Bridge()

---This will get the players job info
---@param src number
---@return string
---@return string
---@return string
---@return string

local playerjobname, playerjoblabel, playerjobgradename, playerjobgradelevel = Bridge.Framework.GetPlayerJob(src)
print(playerjobname) -- police
print(playerjoblabel) -- Police
print(playerjobgradename) -- Lieutenant
print(playerjobgradelevel) -- 3
```
