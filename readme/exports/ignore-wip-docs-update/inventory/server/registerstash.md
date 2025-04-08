# RegisterStash

```lua
local Bridge = exports.community_bridge:Bridge()

##PLEASE NOTE STASHES ARE INCOMPLETE ACROSS SOME INVENTORIES!


---This will register a stash
---@param id number||string
---@param label string
---@param slots number
---@param weight number
---@param owner string
---@param groups table
---@param coords table
---@return boolean
Bridge.Inventory.RegisterStash(id, label, slots, weight, owner, groups, coords)
```
