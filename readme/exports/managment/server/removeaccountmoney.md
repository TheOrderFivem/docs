---
description: Remove from the society's current bank balance
---

# RemoveAccountMoney

**Syntax:**

```
Bridge.Managment.RemoveAccountMoney(account, amount, reason)
```

**Parameters:**

* account (string) - Name of account/society
* amount (number) - Number to remove from the account balance
* reason (string) - Reason to remove the balance

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()

local account = "police"
local amount = 1000
local reason = "For testing"
local accountmoney = Bridge.Managment.RemoveAccountMoney(account, amount, reason)
```
