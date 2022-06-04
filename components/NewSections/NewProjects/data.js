export default {
    header: {
        ru: 'Проекты',
        en: 'Projects',
    },
    projects: [
        {
            title: {
                ru: 'Kojima',
                en: 'Kojima'
            },
            desc: {
                en: 'Multitool application for technical support staff. Helps to quickly solve problems when ' +
                    'working on the line. Includes remote connection to the terminal, requesting and processing database ' +
                    'documents, requesting the status of user devices',
                ru: 'Приложение "Швейцарский нож" для сотрудников технической поддержки. Позволяет оперативно ' +
                    'подключаться к пользователю, запрашивать и редактировать документы, запрашивать статусы устройств.'
            },
            stack: ['vue.png', 'js.png'],
            image: ['kojima1.png', 'kojima2.png']
        },
        {
            title: {
                ru: 'Hermes',
                en: 'Hermes'
            },
            desc: {
                en: 'Application for collecting statistics on user cloud storage. ' +
                    'Allows you to predict potential errors and warn the user in advance about ' +
                    'possible consequences',
                ru: 'Приложение для сбора статистики облаков пользователей. Позволяет предотвратить потенциальные ' +
                    'проблемы и сообщить пользователю о неиспользуемых возможностях приложения и ' +
                    'возможных последствиях.'
            },
            image: ['hermes1.png', 'hermes3.png', 'hermes2.png'],
            stack: ['vue.png', 'express.png', 'typescript.png'],
        },
        {
            title: {
                ru: 'Fragile',
                en: 'Fragile'
            },
            desc: {
                en: 'Complex-application, which includes client and server with inner API. Client of app created for ' +
                    'showing statistic, creating and editing "white list" of employs with access to server\'s functions ' +
                    'from client of another apps, or telegram-bots. Server\'s function is generate and customize message for ' +
                    'telegram-bots, generating one-time password and collecting stat.',
                ru: 'Комплексное приложение, которое включает в себя клиент и сервер с внутренним API. ' +
                    'Клиент приложения предназначен для отображения статистики, формирования и редактирования "Белого ' +
                    'листа" сотрудников, у которых есть доступ к функционалу сервера через клиенты других приложений ' +
                    'или телеграм-ботов. Сервер включает в себя функционал для обработки и генерации сообщений для ' +
                    'телеграм-ботов, генерации одноразовых паролей и сбора статистики.'
            },
            image: ['fragile1.png', 'fragile2.png'],
            stack: ['vue.png', 'express.png', 'typescript.png']
        },
        {
            title: {
                ru: 'Анализатор Amplitude',
                en: 'Amplitude analyzer'
            },
            desc: {
                en: 'App for getting data from service Amplitude. It\'s transform data from json and' +
                    ' convert it for human interface',
                ru: 'Приложение для получения данных из сервиса Amplitude. Трансформирует данные из ' +
                    'нечеловекочитаемого json и перегоняет в удобный формат'
            },
            image: ['amplitude1.png'],
            stack: ['vue.png', 'express.png', 'typescript.png']
        },
        {
            title: {
                ru: 'Raiden',
                en: 'Raiden'
            },
            desc: {
                en: 'Application for creating task to support from Client Department or ' +
                    'Sales Department. After creating your task, message about new task will send ' +
                    'to Telegram, TaskTracker will create new task in tasks list and your task will ' +
                    'showed in task list in client. Task status in client will changed automatically ' +
                    'after changing in Telegram or on tasktracker. All work take server of app',
                ru: 'Приложения для создания задач для технической поддержки от Клиентского департамента ' +
                    'и отдела продаж. После создания задачи в телеграм с сотрудниками будет отправлено ' +
                    'сообщение о новой задаче, в тасктрекере будет создана новая запись, а созданная задача ' +
                    'отобразится в списке задач на клиенте. Статус задачи автоматически обновится после ' +
                    'его изменения в ТГ или на трекере. Всё работу берёт на себя сервер приложения'
            },
            image: ['raiden1.png', 'raiden2.png'],
            stack: ['react.png', 'express.png', 'typescript.png']
        },
        {
            title: {
                ru: 'Ленгдинг компании',
                en: 'Company landing page'
            },
            desc: {
                en: 'Landing site of company(ex)',
                ru: 'Лэндинг компании (бывшей)'
            },
            image: ['mainsite1.png'],
            stack: ['gatsby.png', 'express.png', 'typescript.png']
        },
        {
            title: {
                ru: 'Этот лэндинг',
                en: 'My landing'
            },
            desc: {
                en: 'Just my landing. Nothing serious',
                ru: 'Просто мой лэндинг'
            },
            image: ['mylanding.jpeg'],
            stack: ['next.png', 'js.png']
        },
    ]
}
