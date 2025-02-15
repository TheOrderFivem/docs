# CreatePed



```lua
local Bridge = exports.community_bridge:Bridge()

-- model can be number or string, it will check
-- This will request the model for you so no need to do it beforehand
-- coords vector3/4
-- heading 0.0 or any other
-- networked if you want the vehicle to be networked or not
-- clothing this is incomplete currently but will allow you to set the peds clothing

local myPed = Bridge.Utility.CreatePed(model, coords, heading, networked, clothing)

-- myPed will return the entity handle

```

