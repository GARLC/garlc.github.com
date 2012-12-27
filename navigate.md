---

    layout: master
    title: Navigate
---

<ul class="nav">
  <li class="{%if page.url == '/index.html'%}active{%endif%}"><a href="/">Home</a></li>
  <li class="{%if page.url == '/about.html'%}active{%endif%}"><a href="/about">About</a></li>
  <li class="{%if page.url == '/join.html'%}active{%endif%}"><a href="/join">Join</a></li>
  <li class="{%if page.url == '/volunteer.html'%}active{%endif%}"><a href="/volunteer">Volunteer</a></li>
  <li class="{%if page.url == '/donate.html'%}active{%endif%}"><a href="/donate">Donate</a></li>
  <li class="divider-vertical"></li>
  <li class=""><a href="https://facebook.com/GeorgiaRLC">Facebook</a></li>
  <li class=""><a href="http://twitter.com/GeorgiaRLC">Twitter</a></li>
</ul>

Foo bar{: .foo } baz
{: .biff }

- [Home][]
- [About][]
- [Join][]
- [Volunteer][]
- [Donate][]
- Test{: .divider-vertical }
- [Facebook][]{: .icon-facebook }
- [<i class="icon-twitter"> </i> Twitter][]
{: .nav }

[Home]:      /
[About]:     /about
[Join]:      /join
[Volunteer]: /volunteer
[Donate]:    /donate
[Facebook]:  http://facebook.com/GeorgiaRLC
[Twitter]:   http://twitter.com/GeorgiaRLC
