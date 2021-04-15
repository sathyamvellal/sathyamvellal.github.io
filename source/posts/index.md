---
pagination:
    data: collections.post
    size: 1
    alias: item
redirectUrl: item.url
---

{% from "redirect.njk" import redirect %}
{{ redirect(item.url) }}