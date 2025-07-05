---
description: Opens an input dialog with specified fields and configuration.
---

# Open

**Syntax:**

```
Bridge.Input.Open(title, data, isQBFormat, submitText)
```

**Parameters:**

* `title` (string) - Title of the input dialog
* `data` (table) - Input configuration data (format depends on isQBFormat)
* `isQBFormat` (boolean) - Whether the data is in QB-Core format (will be auto-converted)
* `submitText` (string) - Text for the submit button (default: 'Submit')

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- ox_lib format
local result = Bridge.Input.Open("Player Information", {
    {
        type = 'input',
        label = 'First Name',
        description = 'Enter your first name',
        required = true,
        max = 50
    },
    {
        type = 'input',
        label = 'Last Name',
        description = 'Enter your last name',
        required = true,
        max = 50
    },
    {
        type = 'number',
        label = 'Age',
        description = 'Enter your age',
        required = true,
        min = 18,
        max = 100
    }
})
if result then
    print("First Name: " .. result[1])
    print("Last Name: " .. result[2])
    print("Age: " .. result[3])
else
    print("Input cancelled")
end
```
