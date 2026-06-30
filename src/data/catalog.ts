import type { ApiProduct, CategoriesResponse } from "@/types/product";

const now = "2026-06-30T00:00:00.000Z";

export const catalogProducts: ApiProduct[] = [
  {
    id: "cv-manta-hoodie",
    name: "Manta Hoodie Oversize Cozy",
    slug: "manta-hoodie-oversize-cozy",
    category: "invierno",
    price: "19990",
    original_price: "29990",
    discount_percentage: 33,
    stock: 50,
    image_url:
      "https://images.unsplash.com/photo-1611042558415-61d9bebad25b?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1611042558415-61d9bebad25b?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "viral",
    description:
      "Manta hoodie gigante ultra suave. Abriga cuerpo y brazos. Ideal para invierno, series y regalo. Talla única oversize.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-humidificador-led",
    name: "Humidificador Mini Aroma LED",
    slug: "humidificador-mini-aroma-led",
    category: "hogar",
    price: "15990",
    original_price: "22990",
    discount_percentage: 30,
    stock: 40,
    image_url:
      "https://images.unsplash.com/photo-1616628182504-86bc9fc193eb?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1616628182504-86bc9fc193eb?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-a3825a6bfc8b?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "top",
    description:
      "Humidificador ultraportátil con luz LED y aromaterapia. Silencioso, perfecto para pieza u oficina en invierno.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-calentador-mini",
    name: "Calentador Cerámico Mini Escritorio",
    slug: "calentador-ceramico-mini-escritorio",
    category: "invierno",
    price: "22990",
    original_price: "34990",
    discount_percentage: 34,
    stock: 30,
    image_url:
      "https://images.unsplash.com/photo-1631540577675-7d8bf816d627?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1631540577675-7d8bf816d627?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "viral",
    description:
      "Calentador cerámico compacto con apagado automático. Calienta tu espacio en minutos. Bajo consumo.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-led-rgb",
    name: "Tira LED RGB 5m con Control",
    slug: "tira-led-rgb-5m-control",
    category: "hogar",
    price: "11990",
    original_price: "17990",
    discount_percentage: 33,
    stock: 60,
    image_url:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "nuevo",
    description:
      "Tira LED RGB adhesiva con control remoto. 16 millones de colores para transformar tu pieza al instante.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-masajeador-cuello",
    name: "Masajeador Cuello Calor USB",
    slug: "masajeador-cuello-calor-usb",
    category: "bienestar",
    price: "17990",
    original_price: "26990",
    discount_percentage: 33,
    stock: 35,
    image_url:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "top",
    description:
      "Masajeador de cuello con calor y vibración. Alivia tensión post trabajo o gym. Recargable USB.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-lampara-luna",
    name: "Lámpara Luna Táctil LED",
    slug: "lampara-luna-tactil-led",
    category: "hogar",
    price: "14990",
    original_price: "21990",
    discount_percentage: 32,
    stock: 45,
    image_url:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "viral",
    description:
      "Lámpara luna 3D con luz cálida regulable al tacto. Decoración aesthetic para mesa de noche.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-licuadora-portatil",
    name: "Mini Licuadora Portátil USB",
    slug: "mini-licuadora-portatil-usb",
    category: "cocina",
    price: "16990",
    original_price: "24990",
    discount_percentage: 32,
    stock: 40,
    image_url:
      "https://images.unsplash.com/photo-1570223488312-1c85e1400cc6?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1570223488312-1c85e1400cc6?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "nuevo",
    description:
      "Licuadora portátil recargable para batidos y smoothies. Llévala al gym, trabajo o viaje.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-organizador-giratorio",
    name: "Organizador Giratorio 360°",
    slug: "organizador-giratorio-360",
    category: "hogar",
    price: "13990",
    original_price: "19990",
    discount_percentage: 30,
    stock: 55,
    image_url:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "top",
    description:
      "Organizador giratorio para cocina, especias o cosmética. Aprovecha cada rincón del mueble.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-botella-2l",
    name: "Botella Agua 2L con Marcadores",
    slug: "botella-agua-2l-marcadores",
    category: "bienestar",
    price: "12990",
    original_price: "18990",
    discount_percentage: 32,
    stock: 70,
    image_url:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "viral",
    description:
      "Botella motivacional de 2 litros con horarios de hidratación. Viral en TikTok. Sin BPA.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
  {
    id: "cv-guantes-termicos",
    name: "Guantes Térmicos Touch Pantalla",
    slug: "guantes-termicos-touch-pantalla",
    category: "invierno",
    price: "9990",
    original_price: "14990",
    discount_percentage: 33,
    stock: 80,
    image_url:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=1000&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=1000&fit=crop&q=80",
    ],
    tag: "oferta",
    description:
      "Guantes térmicos con punta touch para usar el celular sin quitártelos. Suaves y abrigadores.",
    is_active: true,
    created_at: now,
    updated_at: now,
  },
];

export function getCatalogCategories(): CategoriesResponse {
  const counts = new Map<string, number>();
  for (const p of catalogProducts) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  }
  const categories = Array.from(counts.entries()).map(([category, count]) => ({
    category,
    count,
  }));
  return {
    total: categories.length,
    categories: [{ category: "todos", count: catalogProducts.length }, ...categories],
  };
}
