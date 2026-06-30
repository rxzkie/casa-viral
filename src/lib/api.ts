import { API_URL } from "@/lib/config";
import { normalizeProduct } from "@/lib/product";
import { catalogProducts, getCatalogCategories } from "@/data/catalog";
import type { ApiProduct, CategoriesResponse } from "@/types/product";

async function fetchRemoteProducts(): Promise<ApiProduct[]> {
  const res = await fetch(`${API_URL}/products`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data: ApiProduct[] = await res.json();
  return data.filter((p) => p.is_active).map(normalizeProduct);
}

async function mergeWithBackend(local: ApiProduct[]): Promise<ApiProduct[]> {
  const remote = await fetchRemoteProducts();
  if (!remote.length) return local.map(normalizeProduct);

  const remoteBySlug = new Map(remote.map((p) => [p.slug, p]));

  return local.map((item) => {
    const match = remoteBySlug.get(item.slug);
    if (!match) return normalizeProduct(item);
    return normalizeProduct({
      ...item,
      id: match.id,
      stock: match.stock,
      price: match.price,
      original_price: match.original_price,
      discount_percentage: match.discount_percentage,
      image_url: match.image_url || item.image_url,
      images: match.images?.length ? match.images : item.images,
    });
  });
}

function filterProducts(
  products: ApiProduct[],
  params?: { category?: string; tag?: string; search?: string },
): ApiProduct[] {
  let result = products.filter((p) => p.is_active);

  if (params?.category && params.category !== "todos") {
    result = result.filter((p) => p.category === params.category);
  }
  if (params?.tag) {
    result = result.filter((p) => p.tag === params.tag);
  }
  if (params?.search) {
    const q = params.search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }

  return result.map(normalizeProduct);
}

export async function getProducts(params?: {
  category?: string;
  tag?: string;
  search?: string;
}): Promise<ApiProduct[]> {
  const merged = await mergeWithBackend(catalogProducts);
  return filterProducts(merged, params);
}

export async function getProductBySlug(
  slug: string,
): Promise<ApiProduct | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getProductById(id: string): Promise<ApiProduct | null> {
  const products = await getProducts();
  return products.find((p) => p.id === id) ?? null;
}

export async function getCategories(): Promise<CategoriesResponse> {
  return getCatalogCategories();
}
