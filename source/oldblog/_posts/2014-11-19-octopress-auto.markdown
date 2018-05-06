---
title: "Octopress + Travis + Prose + SGit + Jota"
layout: post
published: false
date: 2014-11-18-19-30-26 +0530
comments: true
tags: ["octopress", "travis", "blogging"]
permalink: "/blog/octopress-auto"
disclaimer: "Note: This is a blog post from an older version of this website. Links and styles on this page might not render as they are supposed to."
---

I had a problem. I wanted to blog more and mostly wrote in my personal laptop.  Although, I usually wouldn't have the time to finish it. And so, there would go an incomplete blog post which I never finished for weeks; all because it was in my laptop. From months I wanted to move my blogging online and I've finally done that.

<!--- more --->

I've setup [Travis-CI][1] for my website now. If you don't know, travis is a continuous integration service for building and testing projects on Github. We can use it to autobuild octopress projects and deploy to github pages. To integrate travis to your octopress website, visit [Yasuoza Diary's post][2]. The post gives most of the details on what to do. Now any commit to the source branch should trigger travis build. But it's going to build both the source branch and the pages branch (because there was a commit there too, since a deployment was done). Just change the setting in travis to "build only if `.travis.yml` is present". This should now skip trying to build from master.

Now that you're auto deploying, you can use [Prose][3] to create/edit posts online. Prose is brilliant, even in identifying metadata of blog posts and makes your work easier. To create blog posts through Prose or elsewhere online, refer [this gist to create Octopress posts manually][4]. As a minimum, Github itself offers you options to create/edit content in its website.

To blog on mobile, I use SGit, a git client for Android and Jota+ editor for editing. You can use a text editor of your choice, but those which give you shortcuts to insert brackets, quotes, etc are much helpful since you'll be writing in markdown and use those quite a lot. Also, Jota has autosave on exit, which makes your changes persistent on switching to another app. Some editors discard content if you haven't explicitly saved your changes! You can always use Prose on mobile too, no doubt. But you'll need a persistent Internet connection.

PS. I wrote this post on my mobile!

[1]: https://travis-ci.org
[2]: http://blog.yasuoza.com/2014/01/13/octopress-plus-github-pages-plus-travis/
[3]: http://prose.io
[4]: https://gist.github.com/sathyamvellal/2e73e8c70735d0c9051d
