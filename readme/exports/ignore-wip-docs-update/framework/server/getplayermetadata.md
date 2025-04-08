# GetPlayerMetadata

```lua
local Bridge = exports.community_bridge:Bridge()


---This will return the players metadata for the specified metadata key.
---@param metadata table | string
---@return table | string | number | boolean

local metadata = Bridge.Framework.GetPlayerMetaData(src, key)
print(metadata)
```
