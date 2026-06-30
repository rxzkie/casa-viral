import Link from "next/link";
import ProductImage from "./ProductImage";
import { formatCLP } from "@/lib/format";
import { getProductImageUrl } from "@/lib/product";
import type { ApiProduct } from "@/types/product";

type HeroProps = {
  featured?: ApiProduct | null;
};

export default function Hero({ featured }: HeroProps) {
  const featuredImage = featured ? getProductImageUrl(featured) : null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-viral-deep via-[#1a1033] to-viral-deep">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-viral-coral/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-viral-violet/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,92,53,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-24">
        <div className="max-w-xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-viral-coral sm:mb-4 sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-viral-coral" />
            Lo viral de TikTok · Chile
          </p>
          <h1 className="font-display text-[2rem] font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            Tu hogar, pero{" "}
            <span className="bg-gradient-to-r from-viral-coral to-viral-violet bg-clip-text text-transparent">
              viral
            </span>
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/65 sm:mt-6 sm:text-lg">
            Gadgets que viste en TikTok, cozy de invierno y productos que se
            venden solos en live. Envío a todo Chile con Mercado Pago.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="#catalogo"
              className="flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-viral-coral to-[#ff7b57] px-6 text-sm font-semibold tracking-wide text-white shadow-lg shadow-viral-coral/30 transition active:opacity-90 sm:min-h-0 sm:px-8 sm:py-3.5"
            >
              Ver productos virales
            </Link>
            <Link
              href="https://instagram.com/casa.viral.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm tracking-wide text-white backdrop-blur transition active:bg-white/10 sm:min-h-0 sm:px-8 sm:py-3.5"
            >
              @casa.viral.store
            </Link>
          </div>
        </div>
        {featured && featuredImage && (
          <div className="relative mx-auto mt-8 w-full max-w-sm sm:mt-10 sm:max-w-md lg:mt-0 lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-viral-coral/40 to-viral-violet/40 blur-2xl" />
            <Link
              href={`/producto/${featured.slug}`}
              className="relative block overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-sm"
            >
              <div className="relative aspect-square">
                <ProductImage
                  src={featuredImage}
                  alt={featured.name}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {featured.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-viral-coral px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {featured.tag}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between bg-viral-deep/80 px-4 py-4 backdrop-blur-md">
                <p className="font-medium text-white">{featured.name}</p>
                <p className="font-bold text-viral-coral">
                  {formatCLP(featured.price)}
                </p>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
