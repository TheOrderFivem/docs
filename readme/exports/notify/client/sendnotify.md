---
description: Sends a notification message to the client with specified type and duration.
---

# SendNotify

**Syntax:**

```
Bridge.Notify.SendNotify(message, type, time)
```

**Parameters:**

* `message` (string) - The notification message to display
* `type` (string) - The type of notification (success, error, info, warning)
* `time` (number) - Duration in milliseconds (default: 3000)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Send a success notification
Bridge.Notify.SendNotify("Action completed successfully!", "success", 5000)
-- Send an error notification with default duration
Bridge.Notify.SendNotify("Something went wrong!", "error")
```
