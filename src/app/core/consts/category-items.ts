import { ICategory } from "../../features/home/interfaces/category.interface";

export const CATEGORY_ITEMS: ICategory[] = [

    {
        name: 'Ubrania',
        iconSrc: '../../../assets/icons/clothes.png',
        linkData: '/catalog',
        routerData: 'clothes'
    },

    {
        name: 'Książki',
        iconSrc: '../../../assets/icons/books-icon.png',
        linkData: '/catalog',
        routerData: 'books'
    },
    {
        name: 'Obuwie',
        iconSrc: '../../../assets/icons/shoes.png',
        linkData: '/catalog',
        routerData: 'shoes'
    },
    {
        name: 'Elektronika',
        iconSrc: '../../../assets/icons/electronics.png',
        linkData: '/catalog',
        routerData: 'electronics'
    },
    {
        name: 'Maluchy',
        iconSrc: '../../../assets/icons/babies.png',
        linkData: '/catalog',
        routerData: 'babies'
    },
    {
        name: 'Sport',
        iconSrc: '../../../assets/icons/sport.png',
        linkData: '/catalog',
        routerData: 'sport'
    },
    {
        name: 'Toys',
        iconSrc: '../../../assets/icons/toys.png',
        linkData: '/catalog',
        routerData: 'toys'
    },
    {
        name: 'School',
        iconSrc: '../../../assets/icons/school.png',
        linkData: '/catalog',
        routerData: 'school'
    },
    {
        name: 'Transport',
        iconSrc: '../../../assets/icons/transport.png',
        linkData: '/catalog',
        routerData: 'transport'
    }

]