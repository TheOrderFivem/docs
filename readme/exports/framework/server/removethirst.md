# RemoveThirst

**Syntax:**

```
Bridge.Framework.RemoveThirst(src, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `value` (number) - Thirst amount to remove

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local newThirst = Bridge.Framework.RemoveThirst(source, 10)
print('Reduced thirst to:', newThirst)
```
