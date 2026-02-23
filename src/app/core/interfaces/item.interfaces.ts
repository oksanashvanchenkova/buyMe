export interface Item {
    id: number;
    user_id: number;
    category: string;
    title: string;
    description: string;
    item_condition: string;
    image: string;
    price: string;
    created_at: string;
}

export interface IItemsDto {
    data: Item[];
    meta: {
        currentPage: number;
        perPage: number
    }
}