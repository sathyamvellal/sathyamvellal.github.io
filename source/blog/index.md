---
layout: page
title: Blog
---

# Blog Archive

<ul>
{%- for post in collections.blog -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>