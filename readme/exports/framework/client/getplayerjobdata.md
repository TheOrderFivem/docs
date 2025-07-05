---
description: This will get the players jobname, rank, boss status and duty status
---

# GetPlayerJobData

**Syntax:**

```
Bridge.Framework.GetPlayerJobData()
```

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local jobData = Bridge.Framework.GetPlayerJobData()
print('Job:', jobData.jobName)
print('On duty:', jobData.onDuty)
print('Is boss:', jobData.boss)
```
