---
description: This will return the players first and last name
---

# GetPlayerName

**Syntax:**

```
Bridge.Framework.GetPlayerName()
```

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local firstName, lastName = Bridge.Framework.GetPlayerName()
print('Player name:', firstName, lastName)
```
