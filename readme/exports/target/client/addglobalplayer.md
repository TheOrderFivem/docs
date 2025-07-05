---
description: Adds target options to all players globally.
---

# AddGlobalPlayer

**Syntax:**

```
Bridge.Target.AddGlobalPlayer(options)
```

**Parameters:**

* `options` (table) - Array of target option configurations

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
Bridge.Target.AddGlobalPlayer({
    {
        label = "Give Money",
        icon = "fas fa-dollar-sign",
        onSelect = function(entity)
            print("Selected player: " .. entity)
            -- Add your give money logic here
        end,
        groups = {"police", "admin"}
    }
})
```
