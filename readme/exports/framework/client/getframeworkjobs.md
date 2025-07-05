---
description: Function GetFrameworkJobs
---

# GetFrameworkJobs

**Syntax:**

```
Bridge.Framework.GetFrameworkJobs()
```

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local jobs = Bridge.Framework.GetFrameworkJobs()
for _, job in pairs(jobs) do
    print('Job:', job.name, job.label)
end
```
