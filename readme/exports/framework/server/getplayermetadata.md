# GetPlayerMetadata

**Syntax:**

```
Bridge.Framework.GetPlayerMetadata(src, metadata)
```

**Parameters:**

* `src` (number) - Player source ID
* `metadata` (string) - Metadata key

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local stress = Bridge.Framework.GetPlayerMetadata(source, 'stress')
print('Player stress:', stress)
```
