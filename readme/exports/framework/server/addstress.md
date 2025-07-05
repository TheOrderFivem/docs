# AddStress

**Syntax:**

```
Bridge.Framework.AddStress(src, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `value` (number) - Stress amount to add

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local newStress = Bridge.Framework.AddStress(source, 10)
print('New stress level:', newStress)
```
