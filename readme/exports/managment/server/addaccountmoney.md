---
description: Add to the society's current bank balance
---

# AddAccountMoney

**Syntax:**

```
Bridge.Managment.AddAccountMoney(account, amount, reason)
```

**Parameters:**

* account (string) - Name of account/society
* amount (number) - Number to add to the account balance
* reason (string) - Reason to add the balance

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()

local account = "police"
local amount = 1000
local reason = "For testing"
local accountmoney = Bridge.Managment.AddAccountMoney(account, amount, reason)
```
