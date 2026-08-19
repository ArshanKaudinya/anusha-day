import Experience from "@/components/Experience";

export default function Page() {
  return (
    <main className="flex min-h-svh items-stretch justify-center bg-oxblood">
      <div className="relative min-h-svh w-full max-w-[430px] overflow-hidden bg-parchment bg-[radial-gradient(120%_80%_at_50%_-10%,#fdfaf4_0%,#f4ece1_55%,#efe4d6_100%)] font-serif text-ink">
        <div className="grain pointer-events-none absolute inset-0 z-[6]" />
        <Experience />
      </div>
    </main>
  );
}
