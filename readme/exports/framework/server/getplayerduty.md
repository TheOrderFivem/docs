# GetPlayerDuty

**Syntax:**

```
Bridge.Framework.GetPlayerDuty(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local onDuty = Bridge.Framework.GetPlayerDuty(source)
print('On duty:', onDuty)
```
