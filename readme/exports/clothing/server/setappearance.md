---
description: Sets a player's appearance based on provided appearance data.
---

# SetAppearance

**Syntax:**

```
Bridge.Clothing.SetAppearance(src, data, updateBackup, save)
```

**Parameters:**

* `src` (number) - Player server ID
* `data` (table) - Appearance data to apply
* `updateBackup` (boolean) - Whether to update the backup appearance data
* `save` (boolean) - Whether to save the appearance to database

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Apply new clothing
local newAppearance = {
    tshirt_1 = 1,
    tshirt_2 = 0,
    torso_1 = 4,
    torso_2 = 2
}
local result = Bridge.Clothing.SetAppearance(source, newAppearance, false, true)
if result then
    print("Player appearance updated and saved")
end
```
