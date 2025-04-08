# GetPlayersByJob

```lua
local Bridge = exports.community_bridge:Bridge()

---This will get a table of player sources that have the specified job name.
---@param job any
---@return table

local jobtable = Bridge.Framework.GetPlayersByJob(jobname)
print(json.encode(jobtable)
```
