---
description: Gets the society's current bank balance
---

# GetAccountMoney

**Syntax:**

```
Bridge.Managment.GetAccountMoney(account)
```

**Parameters:**

* account (string) - Name of account/society

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()

local account = "police"
local accountmoney = Bridge.Managment.GetAccountMoney(account)
print(accountmoney) -- some number
```
