const SWAN_BODY =
  "M20 34 Q30 20 40 16 Q54 14 50 30 Q58 62 60 100 Q62 126 92 142 Q130 128 168 132 Q182 134 190 140 Q196 130 198 116 Q192 134 188 150 Q178 176 152 186 Q120 196 96 190 Q72 184 66 170 Q60 158 64 148 Q54 128 52 100 Q50 62 38 34 Q30 36 20 34 Z";

export default function Swan() {
  return (
    <div className="relative z-[2] flex min-h-svh animate-[fadeIn_1.4s_both] flex-col justify-center px-[34px] pb-[96px] pt-[80px]">
      <div className="animate-[settle_2s_.2s_both] text-center text-[12px] uppercase tracking-[.34em] text-ink/40">
        the swan
      </div>

      <div className="mb-[12px] mt-[44px] animate-[float_9s_4.6s_ease-in-out_infinite]">
        <svg
          viewBox="10 6 200 198"
          aria-hidden="true"
          className="mx-auto block h-auto w-[78%] overflow-visible"
        >
          <g
            fill="none"
            stroke="#7a1420"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path
              d={SWAN_BODY}
              strokeWidth="1.5"
              strokeDasharray="1200"
              className="animate-[draw_3.8s_.3s_ease-out_both]"
            />
            <path
              d="M86 148 Q120 130 156 136 Q172 140 180 148"
              strokeWidth=".9"
              opacity=".4"
              strokeDasharray="300"
              className="animate-[drawShort_2s_3.4s_ease-out_both]"
            />
            <path
              d="M94 162 Q124 150 152 158"
              strokeWidth=".8"
              opacity=".26"
              strokeDasharray="300"
              className="animate-[drawShort_1.8s_3.9s_ease-out_both]"
            />
            <circle
              cx="42"
              cy="24"
              r="1.3"
              fill="#7a1420"
              stroke="none"
              className="animate-[fadeIn_.8s_3.2s_both]"
            />
            <path
              d="M14 196 Q70 190 118 194 Q166 198 206 192"
              strokeWidth=".8"
              opacity=".2"
              strokeDasharray="300"
              className="animate-[drawShort_2.6s_4.2s_ease-out_both]"
            />
          </g>
        </svg>
      </div>

      <div className="text-center">
        <div className="animate-[rise_2s_4.4s_both] font-script text-[46px] leading-[1.1] text-wine">
          they choose once
        </div>
        <div className="mx-auto mt-[22px] max-w-[26ch] animate-[rise_2s_5s_both] text-[21px] font-light leading-[1.55] text-ink/80 text-pretty">
          and then they stay. I thought about that for a while, and then I
          thought about you.
        </div>
      </div>
    </div>
  );
}
