# Cookie Clicker OC Ideas

A collection of ideas taken from Reddit/Discord for Cookie Clicker mods. Anything goes, as long as you have the sprite/someone willing to make it. You can also suggest ideas for unlock conditions/name/quote. (By default they'll be very bland, like Cheese cursors and no quote since that'd require creativity which I lack)
<br/>
I get notifications from [Reddit](https://www.reddit.com/user/hyoretsu) and my Discord tag is [Hyoretsu#3939](#) (preferred)

# Usage

<details>
<summary>Bookmark</summary>
<br/>
<pre>
javascript: (function() {
	Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');
}());
</pre>
</details>
<details>
<summary>Tampermonkey/Greasemonkey script</summary>
<br/>
<pre>
// ==UserScript==
// @name Cookie Clicker OC Ideas
// @namespace Cookie Clicker OC Ideas
// @include http://orteil.dashnet.org/cookieclicker/
// @include https://orteil.dashnet.org/cookieclicker/
// @include http://orteil.dashnet.org/cookieclicker/beta/
// @include https://orteil.dashnet.org/cookieclicker/beta/
// @version github-latest
// @grant none
// ==/UserScript==
<!-- -->
(function() {
    const checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');
            clearInterval(checkReady);
        }
    }, 1000);
})();
</pre>
</details>
<details>
<summary>Cookie Clicker Mod Manager</summary>
<br/>
Use this link: https://hyoretsu.github.io/ccideas-mod/dist/CCIdeas.js
</details>

# Credits

<ul>
 <li>Misfortune tier belongs to <a href="https://twitter.com/Kiz3r_Official" target="_blank" and rel="noopener noreferrer">Kiz3r</a>, his Patreon is https://www.patreon.com/Kiz3r</li>
</ul>
