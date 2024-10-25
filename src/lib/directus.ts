import { createDirectus, rest, } from '@directus/sdk';

type ProductCategory = {
    id: string;
    category_name: string;
};

type ProductBrand = {
    id: string;
    brand_name: string;
};

type Product = {
    id: string;
    status: "draft" | "published" | "archived"; // Ajusta según los estados posibles
    user_created: string;
    date_created: string;
    user_updated: string | null;
    date_updated: string | null;
    product_image: string;
    product_volume_ml: number;
    product_price: number;
    product_name: string;
    catalog_skin_type: string | null;
    catalog_benefits: string | null;
    catalog_product_description: string | null;
    catalog_product_ingredients: string | null;
    catalog_product_usage: string | null;
    product_category: ProductCategory;
    product_brand: ProductBrand;
};

type Schema = {
  products: Product[];
  categories: ProductCategory[];
  brands: ProductBrand[];
}

const directus = createDirectus<Schema>('http://152.42.139.164:8055').with(rest());

export default directus;