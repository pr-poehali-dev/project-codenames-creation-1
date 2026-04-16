import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";
import { CHANCE_LABELS, MULTIPLIERS, CHANCES, type Skin } from "./skinsData";
import SkinCard from "./SkinCard";

interface UpgradeWheelProps {
  selectedChance: string;
  setSelectedChance: (c: string) => void;
  selectedMultiplier: string | null;
  setSelectedMultiplier: (m: string | null) => void;
  spinning: boolean;
  arrowAngle: number;
  result: "win" | "lose" | null;
  canUpgrade: boolean;
  mySkin: Skin | null;
  targetSkin: Skin | null;
  setMySkin: (s: Skin | null) => void;
  setTargetSkin: (s: Skin | null) => void;
  onUpgrade: () => void;
  onReset: () => void;
  firstSkinImg: string;
}

function ChanceWheel({ chance, spinning, arrowAngle }: { chance: string; spinning: boolean; arrowAngle: number }) {
  const SIZE = 280;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const R_OUTER = 118;
  const R_INNER = 96;
  const pct = parseInt(chance);

  const ticks = Array.from({ length: 60 }, (_, i) => {
    const angle = (i / 60) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const r1 = R_OUTER + 6;
    const r2 = R_OUTER + (isMajor ? 14 : 9);
    return {
      x1: cx + r1 * Math.cos(rad),
      y1: cy + r1 * Math.sin(rad),
      x2: cx + r2 * Math.cos(rad),
      y2: cy + r2 * Math.sin(rad),
      isMajor,
    };
  });

  const winArcDeg = (pct / 100) * 180;

  function polarToCart(angleDeg: number, r: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(startDeg: number, endDeg: number, rOuter: number, rInner: number) {
    const s = polarToCart(startDeg, rOuter);
    const e = polarToCart(endDeg, rOuter);
    const si = polarToCart(endDeg, rInner);
    const ei = polarToCart(startDeg, rInner);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${rOuter} ${rOuter} 0 ${large} 1 ${e.x} ${e.y} L ${si.x} ${si.y} A ${rInner} ${rInner} 0 ${large} 0 ${ei.x} ${ei.y} Z`;
  }

  const segCount = 30;
  const arcSegments = Array.from({ length: segCount }, (_, i) => {
    const t0 = i / segCount;
    const a0 = 180 + t0 * 180;
    const a1 = 180 + ((i + 1) / segCount) * 180;
    const r = Math.round(239 + (234 - 239) * t0);
    const g = Math.round(68 + (179 - 68) * t0);
    const b = Math.round(68 + (8 - 68) * t0);
    return { a0, a1, color: `rgb(${r},${g},${b})` };
  });

  const loseArcPath = arcPath(0, 180, R_OUTER, R_INNER);
  const darkStartDeg = 180 + winArcDeg;
  const hasDarkRight = darkStartDeg < 360;

  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} style={{ overflow: "visible" }}>
        <defs>
          <filter id="glow-yellow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-arrow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <circle cx={cx} cy={cy} r={R_OUTER + 2} fill="#1a1a1a" />

        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={t.isMajor ? "#444" : "#2a2a2a"} strokeWidth={t.isMajor ? 1.5 : 1} />
        ))}

        <path d={loseArcPath} fill="#222" />

        {arcSegments.map((seg, i) => (
          <path key={i} d={arcPath(seg.a0, seg.a1, R_OUTER, R_INNER)} fill={seg.color} />
        ))}

        {hasDarkRight && (
          <path d={arcPath(darkStartDeg, 360, R_OUTER, R_INNER)} fill="#222" />
        )}

        <circle cx={cx} cy={cy} r={R_INNER - 2} fill="#181818" />
        <circle cx={cx} cy={cy} r={R_INNER - 2} fill="none" stroke="#2a2a2a" strokeWidth="1" />

        <text x={cx} y={cy - 10} textAnchor="middle" fill="#2a2a2a" fontSize="36" fontWeight="bold">⌃</text>

        <text x={cx} y={cy + 14} textAnchor="middle" fill="#4ade80" fontSize="28" fontWeight="bold" fontFamily="Montserrat, sans-serif">
          {pct}.00%
        </text>
        <text x={cx} y={cy + 34} textAnchor="middle" fill="#4ade80" fontSize="11" fontFamily="Montserrat, sans-serif">
          {CHANCE_LABELS[chance]}
        </text>

        <text x={cx} y={cy - R_OUTER - 18} textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat, sans-serif">100%</text>
        <text x={cx - R_OUTER - 18} y={cy + 4} textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat, sans-serif">50%</text>
        <text x={cx + R_OUTER + 18} y={cy + 4} textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat, sans-serif">50%</text>

        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={spinning ? { rotate: [0, 360 * 5 + arrowAngle] } : { rotate: arrowAngle }}
          transition={spinning ? { duration: 2, ease: [0.2, 0.8, 0.6, 1] } : { duration: 0.4 }}
        >
          <g transform={`rotate(0, ${cx}, ${cy})`}>
            <polygon
              points={`${cx},${cy + R_OUTER + 18} ${cx - 7},${cy + R_OUTER + 2} ${cx + 7},${cy + R_OUTER + 2}`}
              fill="#f59e0b"
              filter="url(#glow-arrow)"
            />
            <line x1={cx} y1={cy + R_INNER - 2} x2={cx} y2={cy + R_OUTER + 2}
              stroke="#f59e0b" strokeWidth="2.5" />
          </g>
        </motion.g>

        <circle cx={cx} cy={cy} r={R_OUTER} fill="none"
          stroke="rgba(245,158,11,0.08)" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default function UpgradeWheel({
  selectedChance, setSelectedChance,
  selectedMultiplier, setSelectedMultiplier,
  spinning, arrowAngle, result, canUpgrade,
  mySkin, targetSkin, setMySkin, setTargetSkin,
  onUpgrade, onReset, firstSkinImg,
}: UpgradeWheelProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-3 px-5 pb-3" style={{ flex: "0 0 auto" }}>

      {/* LEFT PANEL */}
      <div className="flex-1 rounded-lg border border-neutral-800 p-5 flex flex-col" style={{ background: "#1a1a1a", minHeight: 280 }}>
        <p className="text-sm font-bold text-white text-center mb-1">Выберите скины или скины и баланс для использования</p>
        <p className="text-xs text-neutral-500 text-center mb-6">Вы можете выбрать несколько скинов</p>

        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <img src={firstSkinImg} alt="" className="w-48 h-32 object-contain" style={{ filter: "grayscale(1) brightness(0.3)" }} />
          </div>
          {mySkin ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="w-36 z-10">
              <SkinCard skin={mySkin} selected onClick={() => setMySkin(null)} />
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-3 z-10">
              <div className="flex flex-col items-center gap-0.5">
                <Icon name="ChevronDown" size={28} className="text-yellow-400" />
                <Icon name="ChevronDown" size={28} className="text-yellow-400 -mt-4 opacity-60" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-800">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-500">Сумма баланса:</span>
            <span className="text-yellow-400 font-bold">
              {mySkin ? `🪙 ${mySkin.price.toLocaleString("ru-RU")}` : "0.00 🪙 (max 0.00)"}
            </span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-neutral-800">
            <div className="h-1 rounded-full transition-all duration-500"
              style={{ width: mySkin ? "60%" : "0%", background: "linear-gradient(90deg, #f59e0b, #ca8a04)" }} />
          </div>
        </div>
      </div>

      {/* CENTER WHEEL */}
      <div className="flex flex-col items-center justify-between gap-3 py-2" style={{ minWidth: 300 }}>
        <ChanceWheel chance={selectedChance} spinning={spinning} arrowAngle={arrowAngle} />

        {result && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`font-bold text-base text-center px-4 py-1 rounded ${result === "win" ? "text-green-400" : "text-red-400"}`}
          >
            {result === "win" ? "🎉 Апгрейд успешен!" : "💀 Неудача! Попробуй ещё"}
          </motion.div>
        )}

        <button
          onClick={result ? onReset : onUpgrade}
          disabled={!result && !canUpgrade}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded font-bold text-sm uppercase tracking-wider transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: (canUpgrade || result) ? "linear-gradient(90deg, #92720a, #c9980f, #f0be2a, #c9980f, #92720a)" : "#333",
            color: "#000",
            minWidth: 260,
          }}
        >
          {spinning ? (
            <motion.div className="flex items-center gap-2" animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
              <Icon name="RefreshCw" size={16} className="text-black" />
              <span>Прокачиваем...</span>
            </motion.div>
          ) : result ? (
            <><Icon name="RefreshCw" size={16} className="text-black" /><span>Ещё раз</span></>
          ) : (
            <><Icon name="ChevronsUp" size={16} className="text-black" /><span>Прокачать</span></>
          )}
        </button>

        <div className="flex gap-1.5 flex-wrap justify-center">
          {MULTIPLIERS.map((m) => (
            <button key={m} onClick={() => setSelectedMultiplier(selectedMultiplier === m ? null : m)}
              className={`px-3 py-1.5 text-xs rounded border transition-all font-medium ${selectedMultiplier === m ? "border-yellow-400 text-yellow-400 bg-yellow-400/10" : "border-neutral-700 text-neutral-400 hover:border-neutral-500 bg-neutral-800/50"}`}>
              {m}
            </button>
          ))}
          {CHANCES.map((c) => (
            <button key={c} onClick={() => setSelectedChance(c)}
              className={`px-3 py-1.5 text-xs rounded border transition-all font-bold ${selectedChance === c ? "border-yellow-400 text-yellow-400 bg-yellow-400/10" : "border-neutral-700 text-neutral-400 hover:border-neutral-500 bg-neutral-800/50"}`}>
              {c}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded border border-neutral-700 bg-neutral-800/50 hover:border-neutral-500 transition-colors">
            <Icon name="Shuffle" size={12} className="text-neutral-400" />
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 rounded-lg border border-neutral-800 p-5 flex flex-col" style={{ background: "#1a1a1a", minHeight: 280 }}>
        <p className="text-sm font-bold text-white text-center mb-6">Выберите скин для апгрейда</p>
        <div className="flex-1 flex items-center justify-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <img src={firstSkinImg} alt="" className="w-48 h-32 object-contain" style={{ filter: "grayscale(1) brightness(0.3)" }} />
          </div>
          {targetSkin ? (
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="w-36 z-10">
              <SkinCard skin={targetSkin} selected onClick={() => setTargetSkin(null)} />
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-0.5 z-10">
              <Icon name="ChevronUp" size={28} className="text-yellow-400" />
              <Icon name="ChevronUp" size={28} className="text-yellow-400 -mt-4 opacity-60" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
