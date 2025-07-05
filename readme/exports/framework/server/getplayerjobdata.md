# GetPlayerJobData

**Syntax:**

```
Bridge.Framework.GetPlayerJobData(src)
```

**Parameters:**

* `src` (number) - Player source ID

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local jobData = Bridge.Framework.GetPlayerJobData(source)
if jobData then
    print('Job:', jobData.jobName)
    print('On duty:', jobData.onDuty)
end
```
