# RegisterUsableItem

**Syntax:**

```
Bridge.Framework.RegisterUsableItem(itemName, callback)
```

**Parameters:**

* `itemName` (string) - Item name to register
* `callback` (function) - Function to call when item is used

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
Bridge.Framework.RegisterUsableItem('phone', function(src, itemData)
    print('Player', src, 'used phone')
end)
```
