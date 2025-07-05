---
description: Will return death status for player
---

# GetIsPlayerDead

**Syntax:**

```
Bridge.Framework.GetIsPlayerDead()
```

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
if Bridge.Framework.GetIsPlayerDead() then
    print('Player is down or dead')
end
```
