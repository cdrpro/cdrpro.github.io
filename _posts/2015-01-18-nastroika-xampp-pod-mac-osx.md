---
layout: post
title: "Настройка XAMPP под Mac OSX"
date: 2015-01-18 00:00:00
tags: [dev]
categories: blog
lang: ru
---

**XAMPP** — кроссплатформенная сборка веб-сервера, содержащая Apache, MySQL, интерпретатор скриптов PHP, язык программирования Perl и большое количество дополнительных библиотек, позволяющих запустить полноценный веб-сервер.

С установкой самого [XAMPP](https://www.apachefriends.org/ru/index.html) проблем возникнуть не должно, а вот на настройку нужно потратить немного времени. Итак, что бы завести свой вируальный хост, необходимо сделать следующее:

## Включить VirtualHosts

Сначала нужно открыть файл _/Applications/XAMPP/xamppfiles/etc/httpd.conf_ в любом текстовом редакторе, и найти следующие строки:

```
# Virtual hosts
# Include etc/extra/httpd-vhosts.conf
```

И раскоментировать вторую строку, что бы получилось так:

```
# Virtual hosts
Include etc/extra/httpd-vhosts.conf
```

## Создать свои VirtualHosts

Открываем _/Applications/XAMPP/xamppfiles/etc/extra/httpd-vhosts.conf_, внизу которого написаны примеры того как нужно записывать ваши хосты.

Удаляем или комментируем примеры, и внизу дописываем следующий код:

```
# localhost
<VirtualHost *:80>
    ServerName localhost
    DocumentRoot "/Applications/XAMPP/xamppfiles/htdocs"
    <Directory "/Applications/XAMPP/xamppfiles/htdocs">
        Options Indexes FollowSymLinks Includes execCGI
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

После чего, можно вписывать свои хосты, например:

```
# My custom host
<VirtualHost *:80>
    ServerName mysite.local
    DocumentRoot "/Users/yourusername/path/to/your/site"
    <Directory "/Users/yourusername/path/to/your/site">
        Options Indexes FollowSymLinks Includes ExecCGI
        AllowOverride All
        Require all granted
    </Directory>
    ErrorLog "logs/mysite.local-error_log"
</VirtualHost>
```

## Редактируем свой hosts файл

После того, как вы сохранили _httpd.conf_ и _httpd-vhosts.conf_, необходимо прописать хост в hosts файл. Для этого открываем Терминал и вводим следующую команду:

```bash
sudo nano /etc/hosts
```

Вводите свой системный пароль, после чего откроется редактор. Переводим курсор в конец файла и пишем следующие строки:

```
# XAMPP VirtualHost mappings
127.0.0.1 mysite.local
```

После, сохраняем изменения сочетанием Ctrl+O, и последующим нажатием Enter. И закрываем редактор сочетанием Ctrl+X.

## Перезапуск Apache

Что бы все наши изменения вступили в силу, необходимо перезапустить Апач. Сделать это можно через интерфейс XAMPP. Там же, можно проверить запущен ли MySQL.

После этого, ваш сайт будет доступен по адресу _mysite.local_.
