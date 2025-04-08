# RemoveAccountBalance

```lua
local Bridge = exports.community_bridge:Bridge()

---This will remove money based on the type of account (money/bank)
---@param src number
---@param _type string
---@param amount number
---@return boolean | nil

Bridge.Framework.RemoveAccountBalance(src, accountType, amount)
```
