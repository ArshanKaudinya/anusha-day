const BODY =
  "relative h-[206px] border border-wine/35 bg-[linear-gradient(168deg,#f2e6d7,#ead9c5)] shadow-[0_16px_44px_rgba(43,6,11,0.16)]";
const FLAP =
  "absolute left-0 right-0 top-0 h-[110px] bg-[linear-gradient(176deg,#f6ecdf,#eddfcd)] [clip-path:polygon(0_0,100%_0,50%_100%)]";

export default function Envelope({
  opening,
  onOpen,
}: {
  opening: boolean;
  onOpen: () => void;
}) {
  return (
    <div className="relative z-[2] flex min-h-svh animate-[fadeIn_1.2s_both] flex-col items-center justify-center px-[34px] pb-[96px] pt-[80px]">

      {!opening ? (
        <button
          type="button"
          onClick={onOpen}
          className="relative w-full max-w-[322px] animate-[bloom_1.6s_.3s_cubic-bezier(.2,.85,.25,1)_both]"
        >
          <div className={BODY}>
            <div className={`${FLAP} border-b border-wine/15`} />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-[30px]">
              <div className="font-script text-[34px] text-wine">Anusha</div>
              <div className="mt-[6px] text-[13px] uppercase tracking-[.22em] text-ink/45">
                from Arshan
              </div>
            </div>
          </div>
          <div className="mt-[28px] animate-[breathe_3.4s_1.6s_infinite] text-center text-[18px] italic text-ink/55">
            tap to open
          </div>
        </button>
      ) : (
        <div className="relative w-full max-w-[322px]">
          <div className="absolute bottom-[44px] left-[14px] right-[14px] h-[214px] animate-[pull_1.5s_.85s_cubic-bezier(.2,.9,.2,1)_both] border border-wine/20 bg-letter shadow-[0_-10px_30px_rgba(43,6,11,0.12)]">
            <div className="flex flex-col gap-[11px] px-[22px] py-[26px] opacity-50">
              <div className="h-px bg-ink/[.18]" />
              <div className="h-px w-[86%] bg-ink/[.18]" />
              <div className="h-px w-[92%] bg-ink/[.18]" />
              <div className="h-px w-[74%] bg-ink/[.18]" />
            </div>
          </div>
          <div className={`${BODY} animate-[sink_1s_1.9s_ease-in_both]`}>
            <div
              className={`${FLAP} origin-top animate-[flap_1s_cubic-bezier(.55,0,.3,1)_both]`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
