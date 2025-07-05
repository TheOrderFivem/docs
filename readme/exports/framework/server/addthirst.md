# AddThirst

**Syntax:**

```
Bridge.Framework.AddThirst(src, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `value` (number) - Thirst amount to add

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local newThirst = Bridge.Framework.AddThirst(source, 25)
print('New thirst level:', newThirst)
```
