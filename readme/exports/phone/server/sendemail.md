---
description: Sends an email to a specific player through their phone system.
---

# SendEmail

**Syntax:**

```
Bridge.Phone.SendEmail(src, email, title, message)
```

**Parameters:**

* `src` (number) - Player server ID to send email to
* `email` (string) - Sender email address
* `title` (string) - Email subject/title
* `message` (string) - Email message content

**Example:**

```lua
local Bridge = exports['community_bridge']:Bridge()
-- Send a welcome email
local success = Bridge.Phone.SendEmail(
    source,
    "admin@cityserver.com",
    "Welcome to the City!",
    "Thank you for joining our server. Please read the rules and have fun!"
)
if success then
    print("Welcome email sent!")
else
    print("Failed to send email")
end
```
