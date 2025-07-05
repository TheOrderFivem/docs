---
description: >-
  This will send an email to the passed email address with the title and
  message.
---

# SendEmail

**Syntax:**

```
Bridge.Phone.SendEmail(email, title, message)
```

**Parameters:**

* `email` (string) -
* `title` (string) -
* `message` (string) -

**Example:**

```lua
local Bridge = exports["community_bridge"]:Bridge()
Bridge.Phone.SendEmail()
```
