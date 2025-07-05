# GetPlayerName

**Syntax:**

```
Bridge.Framework.GetPlayerName(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local firstName, lastName = Bridge.Framework.GetPlayerName(source)
print('Player:', firstName, lastName)
```
