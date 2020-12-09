---
layout: default
title: Blog
---

# Blog Archive

<ul>
{%- for post in collections.blogpost -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>