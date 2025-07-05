# SetPlayerMetadata

**Syntax:**

```
Bridge.Framework.SetPlayerMetadata(src, metadata, value)
```

**Parameters:**

* `src` (number) - Player source ID
* `metadata` (string) - Metadata key
* `value` (any) - Value to set

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Framework.SetPlayerMetadata(source, 'stress', 50)
```
