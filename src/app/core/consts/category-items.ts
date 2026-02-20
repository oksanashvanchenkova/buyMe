import { ICategory } from "../../features/home/interfaces/category.interface";

export const CATEGORY_ITEMS: ICategory[] = [

    {
        name: 'Ubrania',
        iconSrc: '../../../assets/icons/clothes.png',
        linkData: '/tabs/catalog',
        routerData: 'clothes'
    },

    {
        name: 'Książki',
        iconSrc: '../../../assets/icons/books-icon.png',
        linkData: '/tabs/catalog',
        routerData: 'books'
    },
    {
        name: 'Obuwie',
        iconSrc: '../../../assets/icons/shoes.png',
        linkData: '/tabs/catalog',
        routerData: 'shoes'
    },
    {
        name: 'Elektronika',
        iconSrc: '../../../assets/icons/electronics.png',
        linkData: '/tabs/catalog',
        routerData: 'electronics'
    },
    {
        name: 'Maluchy',
        iconSrc: '../../../assets/icons/babies.png',
        linkData: '/tabs/catalog',
        routerData: 'babies'
    },
    {
        name: 'Sport',
        iconSrc: '../../../assets/icons/sport.png',
        linkData: '/tabs/catalog',
        routerData: 'sport'
    },
    {
        name: 'Toys',
        iconSrc: '../../../assets/icons/toys.png',
        linkData: '/tabs/catalog',
        routerData: 'toys'
    },
    {
        name: 'School',
        iconSrc: '../../../assets/icons/school.png',
        linkData: '/tabs/catalog',
        routerData: 'school'
    },
    {
        name: 'Transport',
        iconSrc: '../../../assets/icons/transport.png',
        linkData: '/tabs/catalog',
        routerData: 'transport'
    }

]