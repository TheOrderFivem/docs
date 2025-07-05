---
description: This will return the result for a players stored metadata
---

# GetPlayerMetaData

**Syntax:**

```
Bridge.Framework.GetPlayerMetaData(metadata)
```

**Parameters:**

* `metadata` (string|table) - Metadata key to retrieve

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local stress = Bridge.Framework.GetPlayerMetaData('stress')
print('Player stress level:', stress)
```
