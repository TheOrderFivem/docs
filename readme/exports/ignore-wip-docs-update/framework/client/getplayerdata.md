# GetPlayerData

```lua
local Bridge = exports.community_bridge:Bridge()

---This will return a table of player data in the framework specific format.
---@return table

local player = Bridge.Framework.GetPlayerData()
print(json.encode(player , {indent = true}) -- will return a table of the frameworks playerdata table, this is not a standard converted and is unaltered. Avoid using this
```
