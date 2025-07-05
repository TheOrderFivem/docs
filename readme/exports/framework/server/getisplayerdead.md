# GetIsPlayerDead

**Syntax:**

```
Bridge.Framework.GetIsPlayerDead(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
if Bridge.Framework.GetIsPlayerDead(source) then
    print('Player is down')
end
```
