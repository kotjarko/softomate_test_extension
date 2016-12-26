# softomate_test_extension
Тестовое задание на вакансию webdeveloper
Одна из распространенных задач, выполняемая расширениями к браузерам является обработка
текущей страницы пользователя и инъекция информационного контента в содержимое
страницы.
Задача: разработать расширение для Chrome браузера.
Требования:
- Расширение загружает список сайтов по адресу
http://www.softomate.net/ext/employees/list.json
- Список сайтов обновляется расширением 1 раз в час, но не чаще, чем 1 раз в час
- При посещении пользователем страницы из списка сайтов (поле «domain») – показывать
уведомление на загруженной странице (поле «message»)
- Пользователь должен иметь возможность закрыть уведомление
- Если пользователь закрыл уведомление - при следующей загрузке сайта сообщение не
должно быть показано
- Если пользователь не закрыл уведомление - при следующей загрузке сайта сообщение
должно быть показано вновь, но не более 3-х раз за сессию браузера
- Добавить кнопку расширения на панель инструментов браузера
- По клику на кнопку вызывать popup окно
- В окне отобразить список загруженных сайтов с возможностью перехода по сайтам
Разрешается использовать любые JavaScript библиотеки и фреймворки
Предоставить работающее расширение в формате crx и zip
Срок на решение задачи – до 1 недели
Вопросы по заданию разрешаются