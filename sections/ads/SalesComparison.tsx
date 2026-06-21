"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { GlowAccent } from "@/components/Backgrounds";
import { scaleIn } from "@/lib/motion";

/* Ring colour lerps from the site accent (#1b88ff) at the top to a neutral
   slate at the bottom — readable in both dark and light mode. */
const ACCENT: [number, number, number] = [27, 136, 255];
const SLATE: [number, number, number] = [128, 140, 160];

function lerp(t: number): [number, number, number] {
  const c = Math.max(0, Math.min(1, t));
  return [
    Math.round(ACCENT[0] + (SLATE[0] - ACCENT[0]) * c),
    Math.round(ACCENT[1] + (SLATE[1] - ACCENT[1]) * c),
    Math.round(ACCENT[2] + (SLATE[2] - ACCENT[2]) * c),
  ];
}

type ShapeCfg = {
  cx: number;
  topY: number;
  botY: number;
  rxTop: number;
  rxBot: number;
  ry: number;
  type: "cyl" | "cone";
  prefix: string;
  labelTexts: string[];
  sides: ("L" | "R")[];
};

const STAGES = 5;
const N = 20;

function buildShape(cfg: ShapeCfg, active: string | null) {
  const { cx, topY, botY, rxTop, rxBot, ry, type, labelTexts, sides, prefix } =
    cfg;
  const ringAt = (t: number) => ({
    y: topY + (botY - topY) * t,
    rx: rxTop + (rxBot - rxTop) * t,
  });
  const ryOf = (rx: number) => Math.max(2.5, ry * (rx / rxTop));

  // latitude lines (rotating dashed rings)
  const dots = [];
  for (let s = 0; s <= N; s++) {
    const t = s / N;
    const { y, rx } = ringAt(t);
    if (rx < 4) continue;
    const [r, g, b] = lerp(t);
    const stage = Math.min(STAGES - 1, Math.floor(t * STAGES));
    const isActive = active === prefix + stage;
    dots.push({
      key: `d${s}`,
      cx,
      cy: y,
      rx,
      ry: ryOf(rx),
      stroke: `rgba(${r},${g},${b},0.34)`,
      dur: (4.5 + t * 7).toFixed(1) + "s",
      play: isActive ? "paused" : "running",
    });
  }

  // accent rings + labels
  const rings = [];
  const labels = [];
  for (let k = 0; k < STAGES; k++) {
    const t = k / (STAGES - 1);
    const { y, rx } = ringAt(t);
    const ryk = ryOf(rx);
    const [r, g, b] = lerp(t);
    const isActive = active === prefix + k;
    rings.push({
      key: `r${k}`,
      cx,
      cy: y,
      rx,
      ry: ryk,
      color: isActive ? "rgb(110,175,255)" : `rgb(${r},${g},${b})`,
      sw: isActive ? 3.4 : 2,
      transform: isActive ? "scale(1.06)" : "none",
    });

    const side = sides[k];
    const gut = side === "R" ? cx + rxTop + 26 : cx - rxTop - 26;
    const edge = side === "R" ? cx + rx : cx - rx;
    const lto = side === "R" ? gut - 6 : gut + 6;
    labels.push({
      key: prefix + k,
      text: labelTexts[k],
      leftPct: ((gut / 560) * 100).toFixed(2) + "%",
      topPct: ((y / 600) * 100).toFixed(2) + "%",
      transform: side === "R" ? "translate(0,-50%)" : "translate(-100%,-50%)",
      align: side === "R" ? ("left" as const) : ("right" as const),
      lx1: edge,
      ly1: y,
      lx2: lto,
      ly2: y,
      tier: t < 0.45 ? "top" : "low",
      active: isActive,
      id: prefix + k,
    });
  }

  // silhouette sides
  const sidesP =
    type === "cyl"
      ? [
          { key: "sL", d: `M${cx - rxTop},${topY} V${botY}` },
          { key: "sR", d: `M${cx + rxTop},${topY} V${botY}` },
        ]
      : [
          { key: "sL", d: `M${cx - rxTop},${topY} L${cx},${botY}` },
          { key: "sR", d: `M${cx + rxTop},${topY} L${cx},${botY}` },
        ];

  // flow particles along the two silhouette edges
  const particles: {
    key: string;
    d: string;
    dur: string;
    begin: string;
    r: number;
  }[] = [];
  sidesP.forEach((s, di) => {
    [0, 1].forEach((bi) => {
      particles.push({
        key: `p${di}-${bi}`,
        d: s.d,
        dur: "3.4s",
        begin: (di * 0.85 + bi * 1.7).toFixed(2) + "s",
        r: 2.6,
      });
    });
  });

  const glow = { cx, cy: topY, rx: rxTop, ry: ryOf(rxTop) };
  return { dots, rings, labels, sides: sidesP, particles, glow };
}

function Shape({
  cfg,
  caption,
  active,
  setActive,
}: {
  cfg: ShapeCfg;
  caption: string;
  active: string | null;
  setActive: (v: string | null) => void;
}) {
  const { dots, rings, labels, sides, particles, glow } = buildShape(
    cfg,
    active
  );
  const glowId = `${cfg.prefix}Glow`;

  return (
    <div className="flex w-full flex-col items-center md:flex-1 md:max-w-[560px] md:min-w-[300px]">
      <div className="relative w-full">
        <svg
          viewBox="0 0 560 600"
          className="block h-auto w-full overflow-visible"
        >
          <defs>
            <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* dashed silhouette sides */}
          {sides.map((s) => (
            <path
              key={s.key}
              d={s.d}
              fill="none"
              stroke="rgba(130,150,185,0.22)"
              strokeWidth={1}
              strokeDasharray="2 5"
            />
          ))}

          {/* rotating latitude rings */}
          {dots.map((dot) => (
            <ellipse
              key={dot.key}
              cx={dot.cx}
              cy={dot.cy}
              rx={dot.rx}
              ry={dot.ry}
              fill="none"
              stroke={dot.stroke}
              strokeWidth={1.4}
              strokeDasharray="1.4 7"
              strokeLinecap="round"
              style={{
                animation: `sf-flowspin ${dot.dur} linear infinite`,
                animationPlayState: dot.play,
              }}
            />
          ))}

          {/* pulsing glow ring at the mouth */}
          <ellipse
            cx={glow.cx}
            cy={glow.cy}
            rx={glow.rx}
            ry={glow.ry}
            fill="none"
            stroke="rgb(27,136,255)"
            strokeWidth={6}
            filter={`url(#${glowId})`}
            style={{ animation: "sf-glowpulse 2.6s ease-in-out infinite" }}
          />

          {/* accent stage rings */}
          {rings.map((ring) => (
            <ellipse
              key={ring.key}
              cx={ring.cx}
              cy={ring.cy}
              rx={ring.rx}
              ry={ring.ry}
              fill="none"
              stroke={ring.color}
              strokeWidth={ring.sw}
              style={{
                transition: "transform .3s ease, stroke .3s ease",
                transformBox: "fill-box",
                transformOrigin: "center",
                transform: ring.transform,
              }}
            />
          ))}

          {/* flow particles */}
          {particles.map((p) => (
            <circle
              key={p.key}
              r={p.r}
              fill="rgba(125,185,255,0.95)"
              style={{ filter: "drop-shadow(0 0 4px rgba(70,150,255,.95))" }}
            >
              <animateMotion
                path={p.d}
                dur={p.dur}
                begin={p.begin}
                repeatCount="indefinite"
                calcMode="linear"
              />
            </circle>
          ))}

          {/* label connector lines */}
          {labels.map((lb) => (
            <line
              key={lb.key}
              x1={lb.lx1}
              y1={lb.ly1}
              x2={lb.lx2}
              y2={lb.ly2}
              stroke="rgba(150,170,200,.4)"
              strokeWidth={1}
            />
          ))}
        </svg>

        {/* interactive stage labels */}
        {labels.map((lb) => (
          <button
            key={lb.key}
            type="button"
            onMouseEnter={() => setActive(lb.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(lb.id)}
            onBlur={() => setActive(null)}
            className={`absolute max-w-[118px] cursor-pointer bg-transparent p-0 leading-[1.14] outline-none transition-colors duration-200 ${
              lb.active
                ? "text-accent"
                : lb.tier === "top"
                  ? "text-foreground"
                  : "text-muted"
            }`}
            style={{
              left: lb.leftPct,
              top: lb.topPct,
              transform: lb.transform,
              textAlign: lb.align,
              fontSize: "clamp(12px,1.5vw,16px)",
              fontWeight: lb.active ? 700 : 500,
            }}
          >
            {lb.text}
          </button>
        ))}
      </div>

      <div className="mt-3.5 text-xs font-semibold tracking-[0.28em] text-muted">
        {caption}
      </div>
    </div>
  );
}

export function SalesComparison() {
  const [active, setActive] = useState<string | null>(null);

  const pipe: ShapeCfg = {
    cx: 270,
    topY: 152,
    botY: 498,
    rxTop: 112,
    rxBot: 112,
    ry: 24,
    type: "cyl",
    prefix: "p",
    labelTexts: [
      "Lead Generation",
      "Prospect Qualification",
      "Sales Meeting",
      "Sales Proposal",
      "Closing the Deal",
    ],
    sides: ["R", "L", "R", "L", "R"],
  };
  const funnel: ShapeCfg = {
    cx: 282,
    topY: 152,
    botY: 506,
    rxTop: 140,
    rxBot: 8,
    ry: 26,
    type: "cone",
    prefix: "f",
    labelTexts: ["Awareness", "Interest", "Consideration", "Intent", "Decision"],
    sides: ["R", "L", "L", "R", "R"],
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <GlowAccent className="left-1/2 top-[12%] h-[360px] w-[760px] -translate-x-1/2" />
      <div className="container-px">
        <SectionHeading
          align="center"
          eyebrow="How it flows"
          title={
            <>
              Sales Pipeline vs. Sales{" "}
              <span className="text-accent">Funnel.</span>
            </>
          }
          description="The same buyer journey, mapped two ways — a seller-side pipeline and a buyer-side funnel. Hover any stage to explore it."
        />

        <RevealGroup
          className="mx-auto mt-14 flex w-full max-w-[1180px] flex-col items-stretch justify-center gap-8 md:flex-row md:gap-10"
          stagger={0.16}
        >
          <RevealItem variants={scaleIn} className="flex md:flex-1 md:justify-center">
            <Shape
              cfg={pipe}
              caption="SALES PIPELINE"
              active={active}
              setActive={setActive}
            />
          </RevealItem>

          <div
            className="hidden w-px self-stretch md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgb(var(--line)) 14%, rgb(var(--line)) 86%, transparent)",
            }}
          />

          <RevealItem variants={scaleIn} className="flex md:flex-1 md:justify-center">
            <Shape
              cfg={funnel}
              caption="SALES FUNNEL"
              active={active}
              setActive={setActive}
            />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
