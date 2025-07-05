# RemoveHunger

**Syntax:**

```
Bridge.Framework.RemoveHunger(src, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `value` (number) - Hunger amount to remove

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local newHunger = Bridge.Framework.RemoveHunger(source, 15)
print('Reduced hunger to:', newHunger)
```
