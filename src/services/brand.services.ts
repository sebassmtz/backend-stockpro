import { BrandProduct, CreateBrandProduct } from "../interfaces/BrandProduct";
import {prisma } from "../helpers/Prisma";

export const getAllBrands = async (): Promise<BrandProduct[]> => {
    const brands: BrandProduct[] = await prisma.brand_product.findMany({});
    return brands;
}

export const createNewBrand = async (newBrand: CreateBrandProduct): Promise<BrandProduct> => {
    const brand: BrandProduct = await prisma.brand_product.create({
        data: newBrand
    });
    return brand;
}

export const updateBrand = async (id: string, data: BrandProduct): Promise<BrandProduct> => {
    const brandEdited: BrandProduct = await prisma.brand_product.update({
        where: {
            id: id
        },
        data: data
    });
    return brandEdited;
}

export const getBrandById = async (id: string): Promise<BrandProduct> => {
    const brand: BrandProduct = await prisma.brand_product.findUnique({
        where: {
            id: id
        }
    });
    return brand;
}

export const getBrandByName = async (name: string): Promise<BrandProduct> => {
    const brand: BrandProduct = await prisma.brand_product.findFirst({
        where: {
            name: name
        }
    });
    return brand;
}

export const changeStateOfBrand = async (id: string, is_active: boolean): Promise<BrandProduct> => {
    const brand: BrandProduct = await prisma.brand_product.update({
        where: {
            id: id
        },
        data: {
            is_active: is_active
        }
    });
    return brand;
}

export const deleteBrand = async (id: string): Promise<BrandProduct> => {
    const brand: BrandProduct = await prisma.brand_product.delete({
        where: {
            id: id
        }
    });
    return brand;
}
