# GetFrameworkJobs

```lua
local Bridge = exports.community_bridge:Bridge()

---This will return a table of all the jobs in the framework.
---@return table

local frameworkjobs = Bridge.Framework.GetFrameworkJobs()
print(json.encode(frameworkjobs, {indent = true}) -- will return a table {name, label, grade}
```

