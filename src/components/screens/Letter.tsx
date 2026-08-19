export default function Letter() {
  return (
    <div className="relative z-[2] min-h-svh px-[30px] pb-[90px] pt-[84px]">
      <div className="animate-[settle_2s_.3s_both] text-center text-[12px] uppercase tracking-[.34em] text-ink/40">
        the letter
      </div>

      <div className="mt-[34px] animate-[bloom_1.8s_.1s_cubic-bezier(.2,.85,.25,1)_both] border border-wine/20 bg-letter px-[26px] pb-[36px] pt-[40px] shadow-[0_20px_50px_rgba(43,6,11,0.1)]">
        <div className="animate-[inkline_1.4s_.9s_both] font-script text-[40px] leading-none text-wine">
          Anusha,
        </div>
        <div className="mt-[26px] flex flex-col gap-[20px] text-[21px] font-light leading-[1.62] text-letter-ink text-pretty">
          <p className="animate-[inkline_1.4s_1.4s_both]">
            [ Arshan &mdash; write your letter here. Everything below is a
            placeholder, so replace it in your own words. ]
          </p>
          <p className="animate-[inkline_1.4s_2s_both]">
            I like who I am around you. I like the way an ordinary evening turns
            into something I want to remember, just because you are in it.
          </p>
          <p className="animate-[inkline_1.4s_2.6s_both]">
            I am not trying to be clever about this. I would like to be yours,
            properly, and I would like you to be mine.
          </p>
          <p className="animate-[inkline_1.6s_3.4s_both] text-[23px] italic text-wine">
            May I be your boyfriend?
          </p>
        </div>
        <div className="mt-[36px] flex animate-[inkline_1.6s_4.2s_both] flex-col items-end gap-[6px]">
          <div className="text-[15px] uppercase tracking-[.14em] text-ink/40">
            yours,
          </div>
          <div className="font-script text-[46px] leading-none text-wine">
            Arshan
          </div>
        </div>
      </div>
    </div>
  );
}
