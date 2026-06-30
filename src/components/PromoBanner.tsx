"use client";

import { useState } from "react";

export default function PromoBanner() {
  const [copied, setCopied] = useState(false);

  function copyCode() {
    navigator.clipboard.writeText("VIRAL10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-viral-deep via-[#1a1033] to-viral-deep px-5 py-6 sm:px-8 sm:py-10">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-viral-coral/20 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-viral-violet/20 blur-2xl" />
        <div className="relative flex flex-col items-stretch gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-viral-coral sm:text-xs">
              Pack invierno · Live TikTok
            </p>
            <p className="mt-1.5 font-display text-2xl font-bold leading-tight text-white sm:mt-2 sm:text-3xl">
              10% OFF con código VIRAL10
            </p>
            <p className="mt-1 text-sm text-white/50">
              Manta hoodie + humidificador = el combo más pedido
            </p>
          </div>
          <button
            type="button"
            onClick={copyCode}
            className="min-h-[48px] shrink-0 rounded-full bg-gradient-to-r from-viral-coral to-[#ff7b57] px-6 text-sm font-semibold tracking-wide text-white transition active:opacity-90 sm:min-h-0 sm:px-8 sm:py-3"
          >
            {copied ? "¡Copiado!" : "Copiar código"}
          </button>
        </div>
      </div>
    </section>
  );
}
