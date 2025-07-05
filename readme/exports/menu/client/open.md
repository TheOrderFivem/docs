---
description: Opens a menu with specified configuration and options.
---

# Open

**Syntax:**

```
Bridge.Menu.Open(data, useQb)
```

**Parameters:**

* `data` (table) - Menu configuration including title, description, and options
* `useQb` (boolean) - Whether to use QB-Core menu format

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Open a simple menu
local menuId = Bridge.Menu.Open({
    title = "Vehicle Options",
    description = "Choose an action for your vehicle",
    options = {
        {
            title = "Lock Vehicle",
            description = "Lock or unlock your vehicle",
            icon = "fas fa-lock",
            onSelect = function()
                -- Lock vehicle logic
                print("Vehicle locked!")
            end
        },
        {
            title = "Start Engine",
            description = "Start the vehicle engine",
            icon = "fas fa-power-off",
            onSelect = function()
                -- Start engine logic
                print("Engine started!")
            end
        },
        {
            title = "Open Trunk",
            description = "Access vehicle storage",
            icon = "fas fa-box-open",
            onSelect = function()
                -- Open trunk logic
                print("Trunk opened!")
            end
        }
    }
})
```
