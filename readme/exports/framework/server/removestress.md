# RemoveStress

**Syntax:**

```
Bridge.Framework.RemoveStress(src, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `value` (number) - Stress amount to remove

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local newStress = Bridge.Framework.RemoveStress(source, 5)
print('Reduced stress to:', newStress)
```
