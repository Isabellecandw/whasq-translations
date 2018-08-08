const messages = {

    // Login
    'Email': 'Адрес электронной почты',
    'Login': 'Логин',
    'Password': 'Пароль',
    'Provided by your administrator': 'Предоставлено вашим администратором',
    'Remember me': 'Запомнить меня',
    'no-identification-info': 'Если у вас нет вашего логина или пароля, пожалуйста, обратитесь к администратору',
    'bad-credentials': 'Данные указаны неверно. Попробуйте еще раз.',
    'not-enough-rights': 'У вас недостаточно прав для входа.',
    'user-not-found': 'L\'utilisateur n\'a pas été trouvé.', /* TODO */

    // General 
    'more-info': 'Больше информации',
    'from': 'С',
    'to': 'По',
    'real-time': 'в реальном времени',
    'update': 'Обновить',
    'delete': 'Удалить',
    'previous': 'Предыдущий',
    'next': 'Следующий',
    'send': 'Отправить',
    'export-all': 'Экспортировать все',
    'yes': 'Да',
    'no': 'Нет',
    'open': 'Открыть',
    'fullname': 'Полное имя',
    'job-position': 'Должность',
    'assistance': 'Besoin d\'aide ? Contactez-nous.', /* TODO */

    // Menu 
    'activity': 'Активность',
    'actives-users': 'Активные пользователи',
    'registered-users': 'Зарегистрированные пользователи',
    'whasqs-answers': 'Вопросы и Ответы',
    'skills': 'Навыки',
    'time-savings': 'Сэкономленное время',
    'whasqers': 'Пользователи Whasq',
    'podium': 'Пьедестал почета',
    'search': 'Поиск',
    'manage': 'Управлять',
    'skills-categories': 'Навыки и Категории',
    'whasqs': 'Whasqs/Вопросы',
    'whasqs-reports': 'Нежелательные вопросы',
    'answers-reports': 'Нежелательные ответы',
    'users': 'Пользователи',
    'admin': 'Администрация',
    'targets': 'Цели и Gamification',
    'notifications': 'Notifications', /* TODO */

    // Activity 
    'eve-computed-kpi': 'показатель посчитан на D-1',
    'no-data-for-selected-period': 'Нет данных для выбранного периода',
    'no-data-available': 'Aucune donnée disponible', /* TODO */

    // ActivityActiveUsers 
    'actives-title': 'Активные Пользователи',
    'actives-kpi-title': 'Активный',
    'actives-kpi-help-title': 'Активный',
    'actives-kpi-help-message': 'Этот показатель представляет количество пользователей, зашедших в приложение хотя бы один раз в течение месяца "{month}".',
    'actives-dda-kpi-title': 'Активный (с даты активации) SAD',
    'actives-dda-kpi-help-title': 'Активный с даты активации',
    'actives-dda-kpi-help-message': 'Этот показатель представляет количество пользователей, зашедших в приложение с начала работы приложения.',
    'actives-target-kpi-title': 'Активный - Цели',
    'actives-target-kpi-help-title': 'Активный - Цели',
    'actives-target-kpi-help-message': 'Этот показатель представляет отношение количества пользователей, зашедших в приложение хотя бы один раз в течение месяца "{month}" к заданной цели.',
    'actives-evolution-title': 'Эволюция активных пользователей',
    'actives-evolution-help-title': 'Эволюция активных пользователей',
    'actives-evolution-help-message': 'Этот показатель представляет количество активных пользователей.',
    'actives-dda-evolution-title': 'Эволюция активных пользователей с даты активации',
    'actives-dda-evolution-help-title': 'Эволюция активных пользователей с даты активации',
    'actives-dda-evolution-help-message': 'Этот показатель представляет общее количество активных пользователей с момента создания магазина.',
    'actives-notregistered-evolution-title': 'Эволюция активных пользователей - регистрация',
    'actives-notregistered-evolution-help-title': 'Эволюция активных пользователей - регистрация',
    'actives-notregistered-evolution-help-message': 'This indicator represents the number of active users by subtracting registered users.',

    // ActivityRegisteredUsers 
    'registered-title': 'Зарегистрированные пользователи - {month}',
    'registered-kpi-title': 'Зарегистрировано',
    'registered-kpi-help-title': 'Зарегистрировано',
    'registered-kpi-help-message': 'Этот показатель представляет количество пользователей, зашедших в приложение в течение месяца "{month}".',
    'registered-inactives-kpi-title': 'Доля зарегистрированных, но неактивных пользователей',
    'registered-inactives-kpi-help-title': 'Доля зарегистрированных, но неактивных пользователей',
    'registered-inactives-kpi-help-message': 'Этот показатель представляет соотношение между количеством пользователей, зарегистрированных в течение месяца "{month}" и не зашедших в приложение, и общим количеством пользователей в течение месяца.',
    'registered-inactives-evolution-title': 'Эволюция регистрации',
    'registered-inactives-evolution-help-title': 'Эволюция регистрации',
    'registered-inactives-evolution-help-message': 'Этот показатель представляет количество зарегистрированных пользователей.',

    // ActivityWhasqs 
    'whasqs-answers-title': 'Whasqs/Вопросы и Ответы - {month}',
    'whasqs-answers-kpi-title': 'Количество вопросов и ответов',
    'whasqs-answers-kpi-help-title': 'Количество вопросов и ответов',
    'whasqs-answers-kpi-help-message': 'Этот индикатор представляет количество размещенных вопросов плюс количество размещенных ответов в течение месяца "{month}".',
    'whasqs-by-whasqer-kpi-title': 'Количество вопросов / Автор вопросов',
    'whasqs-by-whasqer-kpi-help-title': 'Количество вопросов / Автор вопросов',
    'whasqs-by-whasqer-kpi-help-message': 'Этот индикатор представляет количество вопросов, размещенных автором в течение месяца "{month}".',
    'answers-kpi-title': 'Количество ответов',
    'answers-kpi-help-title': 'Количество ответов',
    'answers-kpi-help-message': 'Этот индикатор представляет количество ответов, размещенных в течение месяца "{month}".',
    'answers-by-creator-kpi-title': 'Количество ответов / Автор ответов',
    'answers-by-creator-kpi-help-title': 'Количество ответов / Автор ответов',
    'answers-by-creator-kpi-help-message': 'Этот индикатор представляет количество ответов, размещенных автором в течение месяца "{month}".',
    'whasqs-with-contribution-kpi-title': 'Доля вопросов с взаимодействием',
    'whasqs-with-contribution-kpi-help-title': 'Доля вопросов с взаимодействием',
    'whasqs-with-contribution-kpi-help-message': 'Этот показатель представляет долю вопросов, которые получили ответы в течение месяца "{month}".',
    'whasqs-with-contribution-dda-kpi-title': 'Доля вопросов с взаимодействием с даты активации',
    'whasqs-with-contribution-dda-kpi-help-title': 'Доля вопросов с взаимодействием с даты активации',
    'whasqs-with-contribution-dda-kpi-help-message': 'Этот показатель представляет долю вопросов, которые получили ответы.',
    'whasqs-resolved-part-kpi-title': 'Доля решенных вопросов',
    'whasqs-resolved-part-kpi-help-title': 'Доля решенных вопросов',
    'whasqs-resolved-part-kpi-help-message': 'Этот показатель представляет долю вопросов, решенных в течение месяца "{month}".',
    'whasqs-resolved-part-dda-kpi-title': 'Доля решенных вопросов с даты активации',
    'whasqs-resolved-part-dda-kpi-help-title': 'Доля решенных вопросов с даты активации',
    'whasqs-resolved-part-dda-kpi-help-message': 'Этот показатель представляет долю решенных вопросов.',
    'whasqs-evolution-title': 'Эволюция количества вопросов',
    'whasqs-evolution-help-title': 'Эволюция количества вопросов',
    'whasqs-evolution-help-message': 'Этот индикатор представляет общее количество вопросов.',
    'answers-evolution-title': 'Эволюция количества ответов',
    'answers-evolution-help-title': 'Эволюция количества ответов',
    'answers-evolution-help-message': 'Этот индикатор представляет общее количество ответов.',

    // ActivitySkills 
    'skills-title': 'Навыки',
    'skills-dda-kpi-title': 'Общее количество навыков, указанных с даты активации',
    'skills-dda-kpi-help-title': 'Общее количество навыков, указанных с даты активации',
    'skills-dda-kpi-help-message': 'Этот показатель представляет количество навыков, указанных пользователями с начала активности.',
    'skills-part-kpi-title': 'Доля указанных особых навыков',
    'skills-part-kpi-help-title': 'Доля указанных особых навыков',
    'skills-part-kpi-help-message': 'Этот показатель представляет соотношение количества особых навыков, указанных пользователями с начала активности, и количества существующих талантов.',
    'skills-evolution-title': 'Эволюция количества навыков в вопросах',
    'skills-evolution-help-title': 'Эволюция количества навыков в вопросах',
    'skills-evolution-help-message': 'Этот показатель представляет количество навыков в вопросах.',
    'most-used-cats-whasqs-kpi-title': 'Топ-5 категорий, наиболее часто используемых в вопросах',
    'most-used-cats-whasqs-kpi-help-title': 'Топ-5 категорий, наиболее часто используемых в вопросах',
    'most-used-cats-whasqs-kpi-help-message-1': 'В этой таблице вы найдете 5 категорий, которые содержат наиболее часто используемые навыки в вопросах.',
    'most-used-cats-whasqs-kpi-help-message-2': 'Цветом выделено количество использованных навыков в вопросах для соответствующей категории.',
    'most-used-skills-whasqs-kpi-title': 'Топ-5 навыков, наиболее часто используемых в вопросах',
    'most-used-skills-whasqs-kpi-help-title': 'Топ-5 навыков, наиболее часто используемых в вопросах',
    'most-used-skills-whasqs-kpi-help-message-1': 'В этой таблице вы найдете топ-5 навыков, наиболее часто используемых в вопросах.',
    'most-used-skills-whasqs-kpi-help-message-2': 'Цветом выделено количество случаев использования навыков в вопросах.',
    'most-used-whasqers-kpi-title': 'Топ-5 навыков, наиболее часто используемых пользователями',
    'most-used-whasqers-kpi-help-title': 'Топ-5 навыков, наиболее часто используемых пользователями',
    'most-used-whasqers-kpi-help-message-1': 'В этой таблице вы найдете топ-5 навыков, наиболее часто указываемых пользователями.',
    'most-used-whasqers-kpi-help-message-2': 'Цветом выделено количество случаев указывания каждого навыка пользователями.',
    'less-used-whasqers-kpi-title': 'Топ-5 навыков, наименее часто используемых пользователями',
    'less-used-whasqers-kpi-help-title': 'Топ-5 навыков, наименее часто используемых пользователями',
    'less-used-whasqers-kpi-help-message-1': 'В этой таблице вы найдете топ-5 навыков, наименее часто указываемых пользователями.',
    'less-used-whasqers-kpi-help-message-2': 'Цветом выделено количество случаев указывания каждого таланта пользователями.',

    // TimeSavings 
    'time-savings-title': 'Экономия времени - {month}',
    'minutes-earned-kpi-title': 'Минуты, сэкономленные в этом месяце',
    'minutes-earned-kpi-help-title': 'Минуты, сэкономленные в этом месяце',
    'minutes-earned-kpi-help-message': 'Этот показатель представляет минуты, сэкономленные в течение месяца "{month}".',
    'minutes-earned-dda-kpi-title': 'Минуты, сэкономленные с даты активации',
    'minutes-earned-dda-kpi-help-title': 'Минуты, сэкономленные с даты активации',
    'minutes-earned-dda-kpi-help-message': 'Этот показатель представляет количество минут, сэкономленных с начала активности.',

    // Podium 
    'podium-title': 'Пьедестал почета',
    'whasqers-of-month': 'Пользователи Whasq',
    'no-podium-for-selected-month': 'Пьедестал очета не доступен на выбранный месяц',

    // Card-user 
    'answers-label': 'ОТВЕТЫ',
    'solutions-label': 'РЕШЕНИЯ',
    'see-profile': 'Посмотреть профиль',
    
    // Search 
    'search-title': 'Поиск',
    'search-by-name-placeholder': 'Поиск по имени...',
    'no-result-select-criteria': 'Нет результатов. Пожалуйста, выберите хотя бы один знак.',

    // CategoriesSearchBlock 
    'dynamic-search-title': 'Динамический поиск',

    // SkillsCategories 
    'skills-categories-title': 'Навыки и Категории',
    'update-cat-for-lang': 'Обновить категорию для языка {lang}',
    'update-skill-for-cat-and-lang-fr': 'Обновить навык для категории "{cat}" и английский язык',
    'add-cat-for-lang-fr': 'Добавить категорию для английского языка',
    'add-skill-for-cat-and-lang-fr': 'Добавить навык для категории "{cat}" для английского языка',
    'delete-cat-confirm-message': 'Вы уверены, что хотите удалить эту категорию?',
    'delete-skill-confirm-message': 'AВы уверены, что хотите удалить этот талант?',
    'choose-lang': 'Выберите язык',
    'add-lang': 'Добавьте язык',
    'add-cat': 'Добавьте категорию',

    // InfoMessage 
    'cat-deleted': 'Категория "{cat}" была удалена.',
    'error-deleting-cat': 'Что-то произошло во время удаления категории "{cat}".',
    'skill-deleted': 'Навык "{skill}" был удален.',
    'error-deleting-skill': 'Что-то произошло во время удаления навыка "{skill}".',

    // SkillCategoriesModal 
    'already-existing-cat': 'Категория(и) уже существует(ют)',
    'already-existing-skill': 'Навык(и) уже существует(ют)',
    'no-existing-cat': 'Категория не существует',
    'no-existing-skill': 'Навык не существует',

    // CreateLanguageModal 
    'add-new-lang': 'Добавить новый язык',
    'already-implemented-langs': 'Языки уже указаны',

    // WhasqsList 
    'whasqs-title': 'Whasqs/Вопросы',
    'block-whasq-confirm-message': 'Вы уверены, что хотите заблокировать этот вопрос?',
    'unblock-whasq-confirm-message': 'Вы уверены, что хотите разблокировать этот вопрос?',
    'ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'unban-user-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'remove-whasq-confirm-message': 'Вы уверены, что хотите удалить этот вопрос?',
    'add-whasq': 'Добавить вопрос',
    'whasqs-list': 'Список вопросов',
    'whasqs-column-id': 'ID',
    'whasqs-column-creation': 'Создание',
    'whasqs-column-update': 'Обновить',
    'whasqs-column-title': 'Название',
    'whasqs-column-status': 'Статус',
    'whasqs-column-urgent': 'Срочный',
    'whasqs-column-answers': 'Ответы',
    'whasqs-column-read': 'Прочитано',
    'whasqs-column-creator': 'Автор',
    'whasqs-column-skills': 'Навыки',
    'whasqs-column-actions': 'Действия',
    'whasq-resolved-by': 'Решено',
    'whasq-resolved-at': 'в',
    'whasqs-action-save-updates': 'Сохранить изменения',
    'whasqs-action-edit-whasq': 'Редактировать вопрос',
    'whasqs-action-unblock-whasq': 'Разблокировать вопрос',
    'whasqs-action-block-whasq': 'Заблокировать вопрос',
    'whasqs-action-see-whasq-channel': 'Посмотреть обсуждение вопроса',
    'whasqs-action-unban-user': 'Разблокировать пользователя',
    'whasqs-action-ban-user': 'Заблокировать пользователя',
    'whasqs-action-remove-whasq': 'Удаление вопроса',

    // WhasqChannelModal 
    'whasq-channel-title': 'Whasq титул "{whasq-title}"',
    'usefull-answer': 'полезный',
    'champion-answer': 'ЧЕМПИОН',
    
    // AddWhasqModal 
    'add-whasq-title': 'Добавить новый вопрос',
    'add-whasq-item-title': 'Название',
    'add-whasq-item-message': 'Сообщение',
    'add-whasq-item-exchange': 'Обмен',
    'add-whasq-item-optionnal': 'Необязательно',
    'add-whasq-item-channel': 'Канал',
    'add-whasq-item-first-skill': 'Первый навык',
    'add-whasq-item-second-skill': 'Второй навык',
    'add-whasq-item-third-skill': 'Третий навык',
    'add-whasq-item-notify-around': 'Сообщить поблизости?',
    'add-whasq-item-urgent': 'Срочный?',
    'add-whasq-item-send-everyone': 'Envoyer à tout le monde ?', /* TODO */

    // WhasqsReports 
    'whasqs-reports-title': 'Нежелательные вопросы',
    'whasqs-reports-unblock-whasq-confirm-message': 'Вы уверены, что хотите разблокировать этот вопрос?',
    'whasqs-reports-unban-user-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'whasqs-reports-ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'whasqs-reports-remove-whasq-confirm-message': 'Вы уверены, что хотите удалить этот вопрос?',
    'whasqs-reports-list': 'Список нежелательных вопросов',
    'whasqs-reports-column-id': 'ID',
    'whasqs-reports-column-creation-date': 'Дата создания',
    'whasqs-reports-column-last-update': 'Последнее обновление',
    'whasqs-reports-column-title': 'Название',
    'whasqs-reports-column-status': 'Статус',
    'whasqs-reports-column-urgent': 'Срочный',
    'whasqs-reports-column-answers': 'Ответы',
    'whasqs-reports-column-creator': 'Автор',
    'whasqs-reports-column-reported-by': 'Сообщено',
    'whasqs-reports-column-actions': 'Действия',
    'whasq-reports-resolved-by': 'Решено',
    'whasq-reports-resolved-at': 'в',
    'whasqs-reports-action-save-updates': 'Сохранить изменения',
    'whasqs-reports-action-edit-whasq': 'Редактировать вопрос',
    'whasqs-reports-action-unblock-whasq': 'Разблокировать вопрос',
    'whasqs-reports-action-see-whasq-channel': 'Посмотреть обсуждение вопроса',
    'whasqs-reports-action-unban-user': 'Разблокировать этого пользователя',
    'whasqs-reports-action-ban-user': 'Заблокировать этого пользователя',
    'whasqs-reports-action-remove-whasq': 'Удаление вопроса',

    // AnswersReports 
    'answers-reports-title': 'Нежелательные ответы',
    'answers-reports-unblock-answer-confirm-message': 'Вы уверены, что хотите разблокировать этот ответ?',
    'answers-reports-unban-user-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'answers-reports-ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'answers-reports-remove-answer-confirm-message': 'Вы уверены, что хотите удалить этот ответ?',
    'answers-reports-list': 'Список нежелательных ответов',
    'answers-reports-column-id': 'ID',
    'answers-reports-column-creation': 'Дата создания',
    'answers-reports-column-last-update': 'Последнее обновление',
    'answers-reports-column-message': 'Сообщение',
    'answers-reports-column-usefull-count': 'Количество лайков',
    'answers-reports-column-champion': 'Чемпион?',
    'answers-reports-column-creator': 'Автор',
    'answers-reports-column-reported-by': 'Сообщено',
    'answers-reports-column-actions': 'Действия',
    'answers-reports-action-save-updates': 'Сохранить изменения',
    'answers-reports-action-edit-answer': 'Редактировать ответ',
    'answers-reports-action-unblock-answer': 'Разблокировать ответ',
    'answers-reports-action-see-whasq-channel': 'Посмотреть обсуждение вопроса',
    'answers-reports-action-unban-user': 'Разблокировать этого пользователя',
    'answers-reports-action-ban-user': 'Заблокировать этого пользователя',
    'answers-reports-action-remove-answer': 'Удаление ответа',

    // Users 
    'users-title': 'Пользователи',
    'users-ban-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'users-unban-confirm-message': 'Вы уверены, что хотите разблокировать этого пользователя?',
    'users-archive-confirm-message': 'Вы уверены, что хотите отправить этого пользователя в архив?',
    'users-import-csv': 'Загрузить CSV',
    'users-list': 'Список пользователей',
    'users-column-id': 'ID',
    'users-column-register-date': 'Дата регистрации',
    'users-column-last-connection': 'Последний вход',
    'users-column-avatar': 'Аватар',
    'users-column-fullname': 'Полное имя',
    'users-column-title': 'Обращение',
    'users-column-email': 'Email',
    'users-column-actions': 'Действия',
    'users-action-see-profile': 'Посмотреть профиль',
    'users-action-unban-user': 'Разблокировать этого пользователя',
    'users-action-ban-user': 'Заблокировать этого пользователя',
    'users-action-archive-user': 'Отправить пользователя в архив',
    'users-import-starting': 'L\'import des utilisateurs a bien débuté', /* TODO */
    'users-action-consider-user-admin': 'Considérer cet utilisateur comme étant admin', /* TODO */
    'users-action-stop-consider-user-admin': 'Ne plus considérer cet utilisateur comme étant admin', /* TODO */
    'users-confirm-consider-admin': 'Etes-vous sûr de vouloir considérer cet utilisateur comme étant admin ?', /* TODO */
    'users-confirm-dont-consider-admin': 'Etes-vous sûr de ne plus vouloir considérer cet utilisateur comme étant admin ?', /* TODO */
  
    // ImportUsersModal
    'users-import-title': 'Import d\'utilisateurs', /* TODO */
    'import-users-file-limit': 'Seuls les fichiers CSV d\'une taille inférieure à 1Mo sont acceptés', /* TODO */
    'import-users-error': 'Une erreur est survenue lors de l\'import. Veuillez réessayer.', /* TODO */
    'import-users-btn': 'Importer les utilisateurs', /* TODO */
    'import-users-expected-format': 'Format attendu', /* TODO */
    'import-users-fullname': 'Nom complet', /* TODO */
    'import-users-email': 'Email', /* TODO */
    'import-users-job-position': 'Poste', /* TODO */
    'import-users-phone': 'Téléphone', /* TODO */

    // Targets 
    'targets-title': 'Цели и Gamification',
    'targets-update-message': 'Цель "{target}" была обновлена',
    'targets-geoloc-perimeter-updated': 'Периметр геолокации был обновлен',
    'targets-points-atribution-updated': 'Присуждение баллов было обновлено',
    'targets-target': 'Цели',
    'targets-trimester': '3 месяца',
    'targets-bimester': '6 месяцев',
    'targets-year': '12 месяцев',
    'targets-active-users': 'активные пользователи',
    'targets-geoloc-perimeter': 'Периметр геолокации',
    'targets-perimeter': 'Периметр',
    'targets-gamification': 'Gamification',
    'targets-approved-answer': 'одобренный ответ',
    'targets-usefull-answer': 'Полезный ответ',
    'targets-recommended-skill': 'Рекомендованный навык',
    'targets-points': 'баллы',

    // Header 
    'header-profile': 'Профиль',
    'header-logout': 'Выйти',
    'french': 'Французский',
    'english': 'Английский',
    'spanish': 'Испанский',
    'italien': 'Итальянский',

    // Sidebar 
    'sidebar-navigation': 'Навигация',

    // Profile 
    'profile': 'Профиль',
    'profile-title': 'Профиль пользователя',
    'profile-ban-user-confirm-message': 'Вы уверены, что хотите заблокировать этого пользователя?',
    'profile-edit-skill-confirm-message': 'Будьте осторожны, редактирование навыков будет проведено для всех пользователей. Вы уверены, что хотите продолжить?',
    'profile-remove-skill-confirm-message': 'Вы уверены, что хотите удалить этот навык у этого пользователя?',
    'profile-archive-user-confirm-message': 'Вы уверены, что хотите отправить этого пользователя в архив?',
    'whasqer-profile': 'Профиль пользователя Whasq',
    'profile-account-creation': 'Создание учетной записи',
    'profile-last-connection': 'Последний вход',
    'profile-last-update': 'Последнее обновление',
    'profile-whasqs-column': 'WHASQS / ВОПРОСЫ',
    'profile-answers-column': 'ОТВЕТЫ',
    'profile-solutions-column': 'РЕШЕНИЯ',
    'profile-block-button': 'Заблокировать',
    'profile-archive-button': 'Архив',
    'profile-user-archived': 'Этот пользователь отправлен в архив',
    'profile-skills-subtitle': 'Ее / Его таланты',
    'profile-no-listed-skill': 'Навыки не указаны',

    // AddUserSkillModal 
    'add-skill-for-user': 'Добавить навык для {fullname}',
    'already-existing-skills-for-user': 'Уже существующие навыки у этого пользователя',
    'available-skills-for-user': 'Навык(и), доступные этому пользователю',

    // SuperAdminStores 
    'store-selection': 'Выбор магазина',
    'store-choice-validation': 'Подтвердить выбор магазина',

    // StoreLogoUpload 
    'choose-company-logo': 'Выбрать логотип вашей компании',
    'drop-file-here-or-click': 'Перетащите сюда свой файл или нажмите для выбора файла для загрузки',
    'company-logo-size-limit': 'Принимаются изображения размером меньше 1 Mb',
    'company-logo-square-required': 'Изображение должно быть квадратной формы.',
    'error-importing-company-logo': 'Что-то пошло не так во время загрузки. Попробуйте еще раз.',
    'import-company-logo': 'Загрузить логотип',

    // Notifications
    'notifications-title': 'Notifications', /* TODO */
    'notifications-list': 'Liste de notifications', /* TODO */
    'notifications-column-id': 'Id', /* TODO */
    'notifications-column-type': 'Type', /* TODO */
    'notifications-column-data': 'Données', /* TODO */
    'notifications-column-owner': 'Propriétaire', /* TODO */
    'notifications-column-shared': 'Partagé ?', /* TODO */
    'notifications-column-creation': 'Date de création', /* TODO */
    'notifications-column-message': 'Message', /* TODO */
    'notifications-no-data': 'Vous n\'avez actuellement aucune notification', /* TODO */
}

export default messages