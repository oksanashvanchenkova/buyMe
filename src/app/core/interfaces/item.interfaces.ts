export interface Item {
    id: number;
    user_id: number;
    category_id: string;
    title: string;
    description: string;
    item_condition: string;
    image: string;
    price: string;
    status: string;
    created_at: string;
    deleted_at: string | null;
    updated_at: string
}

export interface IItemsDto {
    success: boolean;
    data: Item[];
    meta: {
        currentPage: number;
        perPage: number
    }
}