# SetPlayerJob

**Syntax:**

```
Bridge.Framework.SetPlayerJob(src, name, grade)
```

**Parameters:**

* `src` (number) - Player source ID
* `name` (string) - Job name
* `grade` (string|number) - Job grade

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Framework.SetPlayerJob(source, 'police', '1')
```
