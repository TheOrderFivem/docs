# GetIsFrameworkAdmin

**Syntax:**

```
Bridge.Framework.GetIsFrameworkAdmin(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
if Bridge.Framework.GetIsFrameworkAdmin(source) then
    print('Player is an admin')
end
```
