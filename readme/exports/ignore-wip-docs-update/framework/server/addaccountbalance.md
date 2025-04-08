# AddAccountBalance

```lua
local Bridge = exports.community_bridge:Bridge()

---This will add money based on the type of account (money/bank)
---@param src number
---@param _type string
---@param amount number
---@return boolean | nil

Bridge.Framework.AddAccountBalance(src, accountType, amount)
```
