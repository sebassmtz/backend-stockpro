export interface CategoryProduct {
    id: string;
    name: string;
    is_active: boolean;
    description: string;
}

export type createCategoryProduct = Omit<CategoryProduct, 'id'>;