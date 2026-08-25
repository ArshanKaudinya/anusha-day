import Image from "next/image";

export default function Hero({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="relative z-[2] flex min-h-svh flex-col">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="relative aspect-[1280/853] w-full animate-[fadeIn_2.2s_both]">
          <Image
            src="/anusha.jpeg"
            alt=""
            fill
            priority
            sizes="(max-width: 430px) 100vw, 430px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(43,6,11,0.5)_0%,rgba(43,6,11,0.1)_30%,rgba(43,6,11,0.4)_64%,rgba(43,6,11,0.9)_100%)]" />

      <div className="pointer-events-none relative flex flex-1 flex-col justify-end px-[30px] pb-[64px]">
        <div className="mb-[18px] animate-[settle_1.8s_.3s_both] text-[12px] uppercase tracking-[.34em] text-parchment/70">
          for you, only you
        </div>
        <div className="animate-[rise_1.9s_.7s_both] font-script text-[76px] leading-[.92] text-cream [text-shadow:0_2px_26px_rgba(43,6,11,0.5)]">
          Anusha
        </div>
        <div className="mt-[22px] max-w-[19ch] animate-[rise_1.9s_1.3s_both] text-[23px] font-light leading-[1.45] text-cream/[.94] text-pretty">
          Now that I get to ask you.
        </div>
        <div className="mt-[14px] animate-[rise_1.9s_1.9s_both] text-[19px] italic text-cream/[.62]">
          I wanted to make it special :p
        </div>
      </div>

      <button
        type="button"
        onClick={onBegin}
        aria-label="Open"
        className="absolute inset-0 z-[3] cursor-pointer appearance-none border-0 bg-transparent p-0"
      />
    </div>
  );
}
