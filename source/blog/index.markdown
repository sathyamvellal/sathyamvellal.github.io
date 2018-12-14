---
layout: default
title: Sathyam Vellal / Blog
description: Personal Blog
published: true
---

<div class="blog">
  <div class="pl-0">
    {% assign nPosts = site.categories.blog | size %}
    {% if nPosts == 0 %}
    No posts found
    {% else %}
      {% for post in site.categories.blog %}
        {% include post_excerpt.html post=post %}
      {% endfor %}
    {% endif %}
    <br/>
    <hr>
    Head over to <a href="https://sathyam.me/oldblog">sathyam.me/oldblog</a> for posts before 2016.
  </div>
</div>
