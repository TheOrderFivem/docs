---
description: >-
  Opens a progress bar with specified options. Supports both bar and circle
  styles.
---

# Open

**Syntax:**

```
Bridge.ProgressBar.Open(options, callback, isQBFormat)
```

**Parameters:**

* `options` (table) - Progress bar configuration options
* `callback` (function) - Function to call when progress bar completes or is cancelled
* `isQBFormat` (boolean) - Whether the options are in QB-Core format (will be auto-converted)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Basic progress bar
local success = Bridge.ProgressBar.Open({
    duration = 5000,
    label = "Repairing vehicle...",
    canCancel = true,
    disable = {
        move = true,
        car = true,
        combat = true
    },
    anim = {
        dict = "mini@repair",
        clip = "fixing_a_ped"
    }
})
if success then
    print("Repair completed!")
else
    print("Repair cancelled!")
end
```
