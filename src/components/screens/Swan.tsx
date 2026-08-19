const NECK =
  "M145 132 C152 136 156 139 156 143 C147 140 140 133 137 128 C132 116 122 103 111 90 C99 76 91 62 91 48 C91 45 92 42 95 39 C98 36 103 34 109 34 C114 34 121 36.5 126 40 C131 43 133.5 47 133.5 52 C133.5 55 132 58 131 63 C131 68 134.5 73 137.5 79";

const WING =
  "M135 126 C122 121 102 110 88 111 C74 112 56 119 36 117 C42 124 53 131 65 133 C63 135 60 136 58 136 C62 140 79 151 100 153 C110 154 122 152 128 148";

const BILL = "M132.5 63.5 C135 68 137.5 73.5 137.5 79";

export default function Swan() {
  return (
    <div className="relative z-[2] flex min-h-svh animate-[fadeIn_1.4s_both] flex-col justify-center px-[34px] pb-[96px] pt-[80px]">
      <div className="mb-[12px] mt-[44px] animate-[float_9s_4.6s_ease-in-out_infinite]">
        <svg
          viewBox="28 26 136 136"
          aria-hidden="true"
          className="mx-auto block h-auto w-[78%] overflow-visible"
        >
          <g
            fill="none"
            stroke="#7a1420"
            strokeWidth="1.3"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="300"
          >
            <path
              d={NECK}
              pathLength="300"
              className="animate-[drawShort_3s_.3s_ease-out_both]"
            />
            <path
              d={WING}
              pathLength="300"
              className="animate-[drawShort_2s_2.2s_ease-out_both]"
            />
            <path
              d={BILL}
              pathLength="300"
              strokeWidth="1.1"
              className="animate-[drawShort_.6s_3.6s_ease-out_both]"
            />
          </g>
        </svg>
      </div>

      <div className="text-center">
        <div className="animate-[rise_2s_4.4s_both] font-script text-[46px] leading-[1.1] text-wine">
          they choose once
        </div>
        <div className="mx-auto mt-[22px] max-w-[26ch] animate-[rise_2s_5s_both] text-[21px] font-light leading-[1.55] text-ink/80 text-pretty">
          and swans obviously remind me of you, the choice i'm making.
        </div>
      </div>
    </div>
  );
}
