export default {
    title: 'About',
    description:[
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
        {
            title: 'Additionally',
            value: 'I own a geek coffee shop',
            link: 'https://vk.com/frendzonamgn'
        }
        ],
    picture: '/about/me.jpeg'
}