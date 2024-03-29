---
layout: post
title:  "Советы тем, кто пишет макросы"
date:   2015-12-04 00:00:00
categories: blog
lang: ru
---

Небольшой список “капитанских” советов для тех, кто пишет макросы. Потом не говорите, что я вас не предупреждал :)

### Не пишите большие макросы

Чем больше кода, тем сложнее его поддерживать и тем больше шансов не заметить ошибки. Лучше писать небольшие макросы, которые выполняют небольшие отдельные задачи. Если вы всё же, по каким либо причинам, пишете большой макрос, разбивайте его на отдельные не зависящие друг от друга модули или классы.

### Используйте инструменты для контроля версий

Например, Git. Инструменты управления версиями предоставляют несколько существенных преимуществ при разработке. Всегда можно откатиться к какой то конкретной версии или состоянию кода, легко посмотреть различия между версиями.

### Пишите комментарии в коде

Заглянув в свой код через год – другой, вы скорее всего будете какое-то время вспоминать, как он работает. Комментарии позволяют быстро вспомнить, что и как работает. А в случае, если вы передадите код кому-нибудь, или просто выложите исходный код, комментарии будут огромным плюсом.

### Не используйте сторонние библиотеки/компоненты

Например, это могут быть дополнительные улучшенные элементы для форм. Их могут перестать поддерживать, они могут быть не совместимы с платформой на которую может перейти CorelDRAW. В худшем случае, вам придётся переписывать много кода, что бы ваш макрос мог работать без них.

### Не используйте хаки, не документированные возможности языка или системные API

Всё это может привести к тому, что после какого либо обновления системы или библиотек, ваш код перестанет работать, а на выяснение причин и исправление может потребоваться много времени.

### Пишите макросы в младшей версии CorelDRAW

Если вы собираетесь поддерживать несколько версий CorelDRAW, пишите макрос в самой младшей из них. Например, если написать макрос в X7, а потом попытаться его запустить в X5, то скорее всего, у вас ничего не получится. Во-первых, может быть несовместимость API, во-вторых — несовместимость самого формата GMS.

### Не используйте C#/VB.NET

Если нет особой необходимости, используйте стандартный VBA. Его проще поддерживать, и он работает во всех версиях, начиная с 11. Однако, это не значит, что в дальнейшем CorelDRAW не откажется от него.
