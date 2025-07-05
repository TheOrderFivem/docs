# Locale

**Syntax:**

```
Bridge.Language.Locale(key, ...args)
```

**Parameters:**

* `key` (string) - The locale key using dot notation for nested objects
* `unknown` (unknown) - ...args (any) - Optional arguments for string formatting

**Example:**

```
local Bridge = exports['community_bridge']:Bridge()
local text = Bridge.Language.Locale('ui.welcome_message')
print('Localized text:', text)
```
