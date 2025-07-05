# GetPlayersByJob

**Syntax:**

```
Bridge.Framework.GetPlayersByJob(job)
```

**Parameters:**

* `job` (string) - Job name to filter by

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local police = Bridge.Framework.GetPlayersByJob('police')
print('Police online:', #police)
```
