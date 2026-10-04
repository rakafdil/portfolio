import type { CSSProperties } from "react";

type Common = { className?: string; style?: CSSProperties };

/* Deterministic pseudo-random so SSR and client render identically. */
const rnd = (i: number, salt = 1) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

export function Sun({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden>
      <g className="sun-rays">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="60"
            y1="6"
            x2="60"
            y2="19"
            stroke="#ffb703"
            strokeWidth="5"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 60 60)`}
          />
        ))}
      </g>
      <circle cx="60" cy="60" r="26" fill="#ffd166" />
      <circle cx="60" cy="60" r="26" fill="#ffb703" opacity="0.55" />
    </svg>
  );
}

export function Cloud({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 120 64" className={className} style={style} aria-hidden>
      <g fill="#ffffff" opacity="0.92">
        <circle cx="36" cy="40" r="17" />
        <circle cx="64" cy="30" r="21" />
        <circle cx="90" cy="42" r="15" />
        <rect x="22" y="38" width="82" height="20" rx="10" />
      </g>
    </svg>
  );
}

export function Seagull({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 48 20" className={className} style={style} aria-hidden>
      <path
        d="M2 15 Q12 2 24 13 Q36 2 46 15"
        fill="none"
        stroke="#3d4a5c"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PalmTree({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 220 280" className={className} style={style} aria-hidden>
      <path
        d="M118 272 C 112 205 106 140 96 80"
        stroke="#8a5a3b"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
      />
      <g className="palm-fronds" fill="none" strokeLinecap="round">
        <path d="M96 78 C 70 42 30 34 8 52" stroke="#2f9e6e" strokeWidth="12" />
        <path d="M96 78 C 78 30 44 14 18 20" stroke="#37ab77" strokeWidth="12" />
        <path d="M96 78 C 94 26 68 6 44 4" stroke="#2f9e6e" strokeWidth="12" />
        <path d="M96 78 C 110 26 150 10 178 22" stroke="#37ab77" strokeWidth="12" />
        <path d="M96 78 C 122 44 168 40 198 62" stroke="#2f9e6e" strokeWidth="12" />
        <path d="M96 78 C 104 60 140 66 160 90" stroke="#37ab77" strokeWidth="11" />
      </g>
      <circle cx="92" cy="86" r="8" fill="#6b4226" />
      <circle cx="106" cy="84" r="7" fill="#7d4f2c" />
    </svg>
  );
}

export function Crab({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 140 92" className={className} style={style} aria-hidden>
      <g stroke="#e76f51" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M44 58 L24 72 M42 64 L20 78 M96 58 L116 72 M98 64 L120 78" />
        <path d="M48 46 L30 40 M92 46 L110 40" />
      </g>
      <path d="M30 34 A 11 11 0 1 0 30 50 L 20 42 Z" fill="#f4845f" />
      <path d="M110 34 A 11 11 0 1 1 110 50 L 120 42 Z" fill="#f4845f" />
      <g stroke="#e76f51" strokeWidth="3" strokeLinecap="round">
        <line x1="62" y1="34" x2="58" y2="22" />
        <line x1="80" y1="34" x2="84" y2="22" />
      </g>
      <circle cx="58" cy="20" r="5.5" fill="#fff" />
      <circle cx="84" cy="20" r="5.5" fill="#fff" />
      <circle cx="58" cy="20" r="2.4" fill="#3d2b1f" />
      <circle cx="84" cy="20" r="2.4" fill="#3d2b1f" />
      <ellipse cx="71" cy="52" rx="30" ry="19" fill="#f4845f" />
      <path
        d="M62 56 Q 71 63 80 56"
        fill="none"
        stroke="#c9553d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="48" r="2.2" fill="#c9553d" opacity="0.5" />
      <circle cx="82" cy="48" r="2.2" fill="#c9553d" opacity="0.5" />
    </svg>
  );
}

const WAVE_D =
  "M0 64 Q 37.5 40 75 60 T 150 60 T 225 60 T 300 60 T 375 60 T 450 60 T 525 60 T 600 60 T 675 60 T 750 60 T 825 60 T 900 60 T 975 60 T 1050 60 T 1125 60 T 1200 60 L1200 122 L0 122 Z";

export function Waves({ className = "", style }: Common) {
  return (
    <div className={`pointer-events-none ${className}`} style={style} aria-hidden>
      <svg className="wave wave-back" viewBox="0 0 1200 122" preserveAspectRatio="none">
        <path fill="#a9e6db" d={WAVE_D} />
      </svg>
      <svg className="wave" viewBox="0 0 1200 122" preserveAspectRatio="none">
        <path fill="#6cc9c0" d={WAVE_D} />
      </svg>
    </div>
  );
}

export function BubbleCurtain({ count = 32 }: { count?: number }) {
  return (
    <div className="bubble-curtain" aria-hidden>
      {Array.from({ length: count }).map((_, i) => {
        const bubbleStyle = {
          "--bubble-left": `${(rnd(i, 21) * 100).toFixed(2)}%`,
          "--bubble-size": `${Math.round(8 + rnd(i, 22) * 32)}px`,
          "--bubble-delay": `${(-rnd(i, 23) * 3.2).toFixed(2)}s`,
          "--bubble-duration": `${(3 + rnd(i, 24) * 3.2).toFixed(2)}s`,
          "--bubble-drift": `${Math.round((rnd(i, 25) - 0.5) * 72)}px`,
        } as CSSProperties;

        return <span key={i} className="transition-bubble" style={bubbleStyle} />;
      })}
    </div>
  );
}
export function Fish({ className = "", style, color = "#ffb703" }: Common & { color?: string }) {
  return (
    <svg viewBox="0 0 64 36" className={className} style={style} aria-hidden>
      <path d="M2 18 L18 7 L18 29 Z" fill={color} className="-translate-x-2" />
      <ellipse cx="38" cy="18" rx="24" ry="13" fill={color} />
      <path d="M34 6 Q42 12 34 17 Z" fill={color} opacity="0.75" />
      <circle cx="50" cy="15" r="3" fill="#0b2540" />
      <circle cx="51" cy="14" r="1" fill="#fff" />
    </svg>
  );
}

export function FishSchool({
  className = "",
  style,
  colors = ["#ffb703", "#fb8500", "#f4845f", "#ffd166"],
  count = 5,
}: Common & { colors?: string[]; count?: number }) {
  return (
    <div aria-hidden className={`pointer-events-none h-40 ${className}`} style={style}>
      <div className="relative h-full w-full">
        {Array.from({ length: count }).map((_, i) => (
          <Fish
            key={i}
            color={colors[i % colors.length]!}
            className="absolute"
            style={{
              top: `${(rnd(i, 5) * 100).toFixed(2)}%`,
              left: `${(rnd(i, 6) * 72).toFixed(2)}%`,
              width: `${(15 + rnd(i, 7) * 22).toFixed(2)}px`,
              opacity: Math.round((0.5 + rnd(i, 8) * 0.5) * 100) / 100,
              transform: i % 3 === 0 ? "scaleX(1)" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function Jellyfish({
  className = "",
  style,
  color = "#cdb4f6",
  glow = false,
}: Common & { color?: string; glow?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 175"
      className={className}
      style={{ filter: glow ? `drop-shadow(0 0 14px ${color})` : undefined, ...style }}
      aria-hidden
    >
      <g className="jf-bob">
        <g fill="none" stroke={color} strokeWidth="5" strokeLinecap="round">
          <path
            className="jf-t"
            d="M38 82 C 33 108 45 124 38 152"
            style={{ transformOrigin: "38px 82px" }}
          />
          <path
            className="jf-t"
            d="M53 86 C 49 112 59 130 52 160"
            style={{ transformOrigin: "53px 86px", animationDelay: "-0.8s" }}
          />
          <path
            className="jf-t"
            d="M68 86 C 73 112 62 132 69 158"
            style={{ transformOrigin: "68px 86px", animationDelay: "-1.6s" }}
          />
          <path
            className="jf-t"
            d="M83 82 C 88 106 76 124 84 150"
            style={{ transformOrigin: "83px 82px", animationDelay: "-2.2s" }}
          />
        </g>
        <path
          className="jf-bell"
          d="M22 78 Q22 16 60 16 Q98 16 98 78 Q84 90 72 82 Q60 93 48 82 Q36 90 22 78 Z"
          fill={color}
          style={{ transformOrigin: "60px 78px" }}
        />
        <circle cx="48" cy="52" r="3.4" fill="#1b2b4a" />
        <circle cx="72" cy="52" r="3.4" fill="#1b2b4a" />
        <path
          d="M54 62 Q60 68 66 62"
          fill="none"
          stroke="#1b2b4a"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

export function Turtle({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 150 100" className={className} style={style} aria-hidden>
      <path d="M28 70 Q10 74 4 84 Q20 84 34 78 Z" fill="#5aa17f" />
      <path d="M30 62 Q34 30 75 28 Q116 30 120 62 Z" fill="#3a7d5d" />
      <g fill="#5aa17f" opacity="0.55">
        <circle cx="62" cy="42" r="9" />
        <circle cx="88" cy="42" r="9" />
        <circle cx="75" cy="54" r="10" />
      </g>
      <circle cx="132" cy="54" r="12" fill="#5aa17f" />
      <circle cx="136" cy="51" r="2.2" fill="#12352a" />
      <path
        className="flipper"
        d="M116 62 Q138 70 146 88 Q124 84 110 72 Z"
        fill="#5aa17f"
        style={{ transformOrigin: "116px 62px" }}
      />
      <path
        className="flipper"
        d="M42 62 Q26 74 24 90 Q44 82 54 70 Z"
        fill="#4c8f70"
        style={{ transformOrigin: "42px 62px", animationDelay: "-1.7s" }}
      />
    </svg>
  );
}

export function Whale({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 320 170" className={className} style={style} aria-hidden>
      <g fill="#bfe6f2" opacity="0.8">
        <circle className="spout" cx="238" cy="18" r="4" />
        <circle className="spout" cx="252" cy="12" r="5" style={{ animationDelay: "-1.1s" }} />
        <circle className="spout" cx="226" cy="10" r="3.5" style={{ animationDelay: "-2.2s" }} />
      </g>
      <path d="M52 84 Q26 56 8 46 Q34 58 48 68 Q32 40 36 22 Q52 44 58 76 Z" fill="#1e4a74" />
      <path
        d="M52 82 Q128 22 214 34 Q282 44 302 80 Q306 92 294 100 Q268 120 218 122 L96 122 Q54 120 52 82 Z"
        fill="#2a5c8a"
      />
      <path
        d="M96 122 Q180 136 268 110 L240 120 Q160 132 108 122 Z"
        fill="#9fd3e8"
        opacity="0.85"
      />
      <path d="M150 122 Q168 140 196 138 Q172 130 166 120 Z" fill="#9fd3e8" opacity="0.9" />
      <path
        className="flipper"
        d="M180 100 Q206 116 214 134 Q186 128 168 110 Z"
        fill="#1e4a74"
        style={{ transformOrigin: "180px 100px" }}
      />
      <circle cx="272" cy="72" r="5" fill="#0d1f33" />
      <circle cx="274" cy="70" r="1.8" fill="#cfeef8" />
      <path
        d="M292 88 Q300 92 296 98"
        fill="none"
        stroke="#0d1f33"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Anglerfish({ className = "", style }: Common) {
  return (
    <svg viewBox="0 0 190 130" className={className} style={style} aria-hidden>
      <path
        d="M118 34 Q138 8 162 26"
        fill="none"
        stroke="#0d1b2e"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle className="lure" cx="164" cy="27" r="7" fill="#9ff2ff" />
      <circle className="lure" cx="164" cy="27" r="12" fill="#9ff2ff" opacity="0.25" />
      <path d="M52 72 L24 50 L32 74 L22 94 Z" fill="#0d1b2e" />
      <path
        d="M50 74 Q66 34 112 38 Q158 44 168 76 Q158 100 116 104 L64 100 Q50 94 50 74 Z"
        fill="#0d1b2e"
      />
      <path d="M96 100 Q108 116 130 114 Q110 108 106 98 Z" fill="#16304c" />
      <path d="M150 84 L158 76 L166 84 L174 76 L180 86 Q170 96 154 94 Z" fill="#eaf6ff" />
      <circle cx="126" cy="62" r="5.5" fill="#9ff2ff" opacity="0.95" />
      <path
        d="M84 42 Q92 30 104 34"
        fill="none"
        stroke="#16304c"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Bubbles({ count = 10, className = "" }: Common & { count?: number }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-x-clip overflow-y-visible ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = 6 + rnd(i, 1) * 14;
        return (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${(rnd(i, 2) * 100).toFixed(2)}%`,
              width: `${size.toFixed(2)}px`,
              height: `${size.toFixed(2)}px`,
              animationDuration: `${(9 + rnd(i, 3) * 9).toFixed(2)}s`,
              animationDelay: `${(-rnd(i, 4) * 18).toFixed(2)}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function MarineSnow({ count = 24, className = "" }: Common & { count?: number }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-x-clip overflow-y-visible ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = 2 + rnd(i, 11) * 3;
        return (
          <span
            key={i}
            className="snow"
            style={{
              left: `${(rnd(i, 12) * 100).toFixed(2)}%`,
              width: `${size.toFixed(2)}px`,
              height: `${size.toFixed(2)}px`,
              filter: "blur(0.5px)",
              animationDuration: `${(20 + rnd(i, 13) * 22).toFixed(2)}s`,
              animationDelay: `${(-rnd(i, 14) * 40).toFixed(2)}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function LightRays() {
  return (
    <div aria-hidden className="light-rays">
      <div style={{ left: "12%", animationDelay: "-2s" }} />
      <div style={{ left: "34%", animationDelay: "-5s", width: "70px" }} />
      <div style={{ left: "62%", animationDelay: "-1s" }} />
      <div style={{ left: "84%", animationDelay: "-6s", width: "80px" }} />
    </div>
  );
}
