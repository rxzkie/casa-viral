"use client";

import { useState } from "react";
import type { ApiProduct, CategoryItem } from "@/types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: ApiProduct[];
  categories: CategoryItem[];
};

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [active, setActive] = useState<string>("todos");

  const filtered =
    active === "todos"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="text-center">
        <p
          id="novedades"
          className="text-[10px] uppercase tracking-[0.3em] text-viral-coral sm:text-xs sm:tracking-[0.4em]"
        >
          Catálogo invierno 2026
        </p>
        <h2 className="mt-2 font-display text-3xl font-bold text-viral-deep sm:mt-3 sm:text-4xl lg:text-5xl">
          Lo más viral ahora
        </h2>
        <p className="mx-auto mt-3 max-w-lg px-2 text-sm text-viral-deep/55 sm:mt-4 sm:text-base">
          Productos seleccionados para TikTok Live. Demostrables, con margen y
          envío a todo Chile.
        </p>
      </div>
      {categories.length > 0 && (
        <div className="-mx-4 mt-8 overflow-x-auto px-4 scrollbar-hide sm:mx-0 sm:mt-10 sm:overflow-visible sm:px-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setActive(cat.category)}
                className={`min-h-[40px] shrink-0 rounded-full px-4 py-2 text-sm font-medium tracking-wide transition active:scale-95 sm:px-5 ${
                  active === cat.category
                    ? "bg-gradient-to-r from-viral-coral to-[#ff7b57] text-white shadow-md shadow-viral-coral/25"
                    : "bg-viral-sand/50 text-viral-deep/70 active:bg-viral-sand"
                }`}
              >
                {cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-viral-deep/40">
          No hay productos en esta categoría.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:mt-12 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
