---
layout: post
title: "0 A.D. Fundraiser: 3 weeks remain!"
date: 2013-10-02 01:23
comments: true
permalink: "0ad-Fundraiser-3-weels"
description: "Help contribute to an open source Age of Empires replacement."
disclaimer: "Note: This is a blog post from an older version of this website. Links and styles on this page might not work/render as expected."
---
<div class="disclaimer center grey text-small">{{ page.disclaimer }}</div>

[0 A.D.][12] is a free and open source, historical RTS game. The concept of the game was designed in 2003 and was developed for around six years as a closed-source freeware project. In 2009 the game went open source under the GPL license and art content under CC-BY-SA. This steadily attracted a lot of contributors ranging from art designers to programmers to develop the game. Much of the development and contribution started after the project was open sourced.

<!-- more -->

Less than a month ago, [0 A.D. launched a crowdfunding campaign in Indiegogo][11] to help hire two contributors full-time to get it to a release state much sooner and better than its current pace of development.

<div class="youtube">
    <iframe id="vid3" type="text/html" class="youtube" width="440" height="300" src="http://www.youtube.com/embed/Y-0l7Ej3cM8" frameborder="0">
    </iframe>
</div>
<div class="youtube">
    <iframe id="vid4" type="text/html" class="youtube" width="440" height="300" src="http://www.youtube.com/embed/DXDxXGTzIf4" frameborder="0">
    </iframe>
</div>

The previous and the current alpha versions have improved the game's performance and added many new features into the game. The stage is being set for the next alpha release which brings a host of new features including a featured Multiplayer Lobby! No wonder this project pushes the bar up for gaming in Linux open source games.
The [Indiegogo campaign][11] is flexibly funded with targets starting from $40,000 till $240,000 and goals ranging from improving the game performance till releasing the first version of the game within a couple of years.

The best part of this project being open source is the developer community! They're not just developers and contributors. They are a family. The modern ancient family. They are a constantly working group, who've volunteered to build this game.

IndieStatik covered an in-depth article about [0 A.D. and its crowdfunding campaign][15] in which the author beautifully states -

> "A huge project like 0 A.D. is worthy of people’s time because it’s a community project that people can find resolve in, share stories with others who helped to build it, and in a few months, or a year, or maybe even a decade, they’ll be able to look back at the game and remember the people they met, the things they learned, the things they shared."

I also would like to quote -

> "It’s remarkable how a project of this size is sustainable with practically no budget, built from the passion of volunteers, who talk with one another, congratulate each other, see newcomers arrive and welcome them with open arms."

For there is no greater gift in the world than knowledge!
Donate to the 0 A.D. Project and be a part of this great community.

**Website:** http://play0ad.com

**Indiegogo Campaign:** http://www.indiegogo.com/projects/support-0-a-d-an-open-source-strategy-game/

**IRC Channels:** [#0ad][13] and [#0ad-dev][14] on QuakeNet IRC

---
I've included some screenshots below for you to have a quick look at the game!

A Village in Gaul and Depth and Fog rendering!

![A Village in Gaul][2]
![Depth and Fog Rendering][8]

Persian Heavy Infantry and 0 A.D.'s Atlas Map Editor

![Persian Heavy Infantry][5]
![Atlas Editor][7]

Oasis in 0 A.D. Desert and Water Rendering effects.

![Oasis][6]
![Care for a swim?][3]

Building an Empire on Islands and Whales in oceans!

![Island Life][1]
![Whales][4]


[1]: http://play0ad.com/wp-content/gallery/screenshots/screenshot0072.jpg
[2]: https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-prn2/1237349_10151914968049859_1015039661_o.jpg
[3]: https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-prn1/1073220_10151752821764859_690497580_o.jpg
[4]: http://play0ad.com/wp-content/gallery/screenshots/screenshot0060.jpg
[5]: http://play0ad.com/wp-content/gallery/screenshots/alpha-8-persianheavyinfantry.jpg
[6]: http://play0ad.com/wp-content/gallery/screenshots/screenshot0343.png
[7]: http://play0ad.com/wp-content/gallery/screenshots/scr.png
[8]: http://play0ad.com/wp-content/gallery/screenshots/tilt-shift-filter.jpg
[9]: http://play0ad.com/wp-content/gallery/screenshots/screenshot0088.png
[10]: http://youtube.com/user/play0ad
[11]: http://www.indiegogo.com/projects/support-0-a-d-an-open-source-strategy-game/
[12]: http://play0ad.com
[13]: http://webchat.quakenet.org/?channels=#0ad
[14]: http://webchat.quakenet.org/?channels=#0ad-dev
[15]: http://indiestatik.com/2013/10/01/10-years-in-alpha-how-volunteer-modders-created-0-a-d-with-the-help-of-a-community/

<script type="text/javascript">
    var elem = $("#content img").eq(0).load(function() {
        var width = $(this).width();
        var height = $(this).height();
        var vid3 = document.getElementById("vid3");
        var vid4 = document.getElementById("vid4");
        vid3.width = vid4.width = width;
        vid3.height = vid4.height = height;
    });
    $("#content img").eq(4).load(function() {
        var img2 = $(this);
        $("#content img").eq(5).load(function() {
            img2.height($(this).height());
        });
    });
    $("#content img").eq(1).load(function() {
        var img2 = $(this);
        $("#content img").eq(0).load(function() {
            img2.height($(this).height());
        });
    });
</script>
