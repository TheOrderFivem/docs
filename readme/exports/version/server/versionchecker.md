---
description: >-
  Compares the current resource version with the latest GitHub release and
  prints an update notification if a newer version is available. The version is
  extracted from the resource's fxmanifest.lua vers
---

# VersionChecker

**Syntax:**

```
Bridge.Version.VersionChecker(repoPath, tebexasset)
```

**Parameters:**

* `repoPath` (string) - GitHub repository path in format 'username/reponame'
* `tebexasset` (boolean|nil) - Optional flag for Tebex resources (shows CFX asset portal link instead of GitHub)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Check for Community Bridge updates
Bridge.Version.VersionChecker('The-Order-Of-The-Sacred-Framework/community_bridge', false)
-- Check for a Tebex resource
Bridge.Version.VersionChecker('myusername/my-premium-script', true)
```
