---
layout: page
title:  "Обучающие материалы"
permalink: /books/
---

Обзоры, уроки и статьи по CorelDRAW GS находятся в процессе конвертации в новый формат.

<div class="book-list">
    {% for book in site.data.books %}
    <div class="book  book-{{ book[0] }}">
        <div class="book__cover">
            <img class="book__cover-img" src="/assets/books/{{ book[0] }}.jpg" />
        </div>
        <div class="book__content">
            <h2 class="book__title">
                <a href="{{ book[1].link }}" target="_blank">{{ book[1].name }}</a>
            </h2>
            <p class="book__description">
                {{ book[1].description }}
            </p>
            <a href="{{ book[1].link }}" class="btn  btn__more" target="_blank">
                Читать онлайн или скачать...
            </a>
        </div>
    </div>
    {% endfor %}
</div>

[Полный список книг](https://www.gitbook.com/@cdrpro-macros/).   
_Следите за обновлениями..._
