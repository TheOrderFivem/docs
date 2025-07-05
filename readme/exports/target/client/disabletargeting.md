---
description: Enables or disables the targeting system entirely.
---

# DisableTargeting

**Syntax:**

```
Bridge.Target.DisableTargeting(bool)
```

**Parameters:**

* `bool` (boolean) - True to disable targeting, false to enable

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
-- Disable targeting
Bridge.Target.DisableTargeting(true)
-- Re-enable targeting
Bridge.Target.DisableTargeting(false)
```
