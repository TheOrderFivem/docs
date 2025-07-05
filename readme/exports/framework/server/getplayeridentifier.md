# GetPlayerIdentifier

**Syntax:**

```
Bridge.Framework.GetPlayerIdentifier(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local identifier = Bridge.Framework.GetPlayerIdentifier(source)
print('Player ID:', identifier)
```
