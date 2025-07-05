---
description: Sends a notification message to a specific player.
---

# SendNotify

**Syntax:**

```
Bridge.Notify.SendNotify(src, message, type, time)
```

**Parameters:**

* `src` (number) - Player server ID to send notification to
* `message` (string) - The notification message to display
* `type` (string) - The type of notification (success, error, info, warning)
* `time` (number) - Duration in milliseconds (default: 3000)

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Send notification to specific player
Bridge.Notify.SendNotify(source, "Welcome to the server!", "info", 8000)
-- Send error notification
Bridge.Notify.SendNotify(source, "You don't have permission!", "error")
```
