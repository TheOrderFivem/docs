# CreateShop

```
local Bridge = exports.community_bridge:Bridge()

---This will create a shop to use on the client side, shops must be registered server side and exsist in the shop inventory table to allow any purchases passed.
---@param shopTitle string
---@param shopInventory table
---@param shopCoords table
---@param shopGroups table | Optional
---@return boolean

Bridge.Shops.CreateShop(shopTitle, shopInventory, shopCoords, shopGroups)
```
