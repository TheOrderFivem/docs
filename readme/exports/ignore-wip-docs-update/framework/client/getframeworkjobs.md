# GetFrameworkJobs

```
local Bridge = exports.community_bridge:Bridge()

local frameworkjobs = Bridge.Framework.GetFrameworkJobs()
print(json.encode(frameworkjobs, {indent = true}) -- will return a table {name, label, grade}
```
