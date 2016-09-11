---
layout: page
title:  "Полезные ссылки"
permalink: /links/
---

## Обучающие материалы по CorelDRAW GS

{% for book in site.data.books %}
[{{ book[1].name }}]({{ book[1].link }}) {% if book[1].inprogress %}<small>(в процессе)</small>{% endif %}   
{{ book[1].description }}
{% endfor %}

<small>[Полный список книг...](https://www.gitbook.com/@cdrpro-macros/)</small>

***

## Архив форума cdrpro.ru

Вся информация со старого форума доступна по следующей ссылке:
[архив форума cdrpro.ru](http://cdrpro-forum-archive.github.io/forum.html).
