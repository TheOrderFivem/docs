# AddHunger

**Syntax:**

```
Bridge.Framework.AddHunger(src, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `value` (number) - Hunger amount to add

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local newHunger = Bridge.Framework.AddHunger(source, 20)
print('New hunger level:', newHunger)
```
