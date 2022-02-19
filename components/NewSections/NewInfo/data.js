export default {
    title: {
        en: 'About me',
        ru: 'Обо мне'
    },
    id: 'about',
    description: {
        en: [
            {
                title: 'Name',
                value: 'Vitaly'
            },
            {
                title: 'Age',
                value: (new Date).getFullYear() - ((new Date).getMonth() > 5 ?  1991 : 1992)
            },
            {
                title: 'Degree',
                value: 'Bachelor of Professional Pedagogy in Informatics and Computer Engineering',
                link: 'https://www.ppi.cspu.ru/index.php/ru/about-us/kafedra-podgotovki-pedagogov-professional-nogo-obucheniya-i-predmetnykh-metodik'
            },
            {
                title: 'Location',
                value: 'Magnitogorsk, Russia',
                link: 'https://goo.gl/maps/16CQMEEcJTAQQuQ86'
            },
            {
                title: 'Hobbies',
                value: 'Road Trips, comics collecting, guitar playing, grilling'
            },
        ],
        ru: [
            {
                title: 'Имя',
                value: 'Виталий'
            },
            {
                title: 'Возраст',
                value: (new Date).getFullYear() - ((new Date).getMonth() > 5 ?  1991 : 1992)
            },
            {
                title: 'Образование',
                value: 'Бакалавр профессиональной педагогики по направлению "ИКТиВТ"',
                link: 'https://www.ppi.cspu.ru/index.php/ru/about-us/kafedra-podgotovki-pedagogov-professional-nogo-obucheniya-i-predmetnykh-metodik'
            },
            {
                title: 'Место проживания',
                value: 'Магнитогорск, Челябинская обл.',
                link: 'https://goo.gl/maps/16CQMEEcJTAQQuQ86'
            },
            {
                title: 'Хобби',
                value: 'Дорожные путешествия, коллекционирование комиксов, игра на гитаре, вокал, готовка на гриле'
            },
        ]
    },

    picture: '/static/info.png'
}
