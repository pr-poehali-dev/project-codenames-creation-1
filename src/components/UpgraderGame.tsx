import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Icon from "@/components/ui/icon";

const SKINS = [
  { id: 1, name: "Dragon Lore", weapon: "AWP", grade: "FN", price: 1278435, color: "#e4a84b", img: "https://cdn.poehali.dev/projects/f3f738c2-69a9-4768-8ef8-93869a09bec0/bucket/0167c553-099c-4f3c-9060-207c227360e5.png" },
  { id: 2, name: "Howl", weapon: "M4A4", grade: "FN", price: 1518405, color: "#e03b3b", img: "https://cdn.poehali.dev/projects/f3f738c2-69a9-4768-8ef8-93869a09bec0/bucket/0167c553-099c-4f3c-9060-207c227360e5.png" },
  { id: 3, name: "Pandora's Box", weapon: "Sport Gloves", grade: "FN", price: 1899605, color: "#a855f7", img: "https://cdn.poehali.dev/projects/f3f738c2-69a9-4768-8ef8-93869a09bec0/bucket/0167c553-099c-4f3c-9060-207c227360e5.png" },
  { id: 4, name: "Doppler Ruby", weapon: "Butterfly Knife", grade: "FN", price: 1105962, color: "#e03b3b", img: "https://cdn.poehali.dev/projects/f3f738c2-69a9-4768-8ef8-93869a09bec0/bucket/0167c553-099c-4f3c-9060-207c227360e5.png" },
  { id: 5, name: "Gungnir", weapon: "AWP", grade: "FN", price: 900242, color: "#3b82f6", img: "https://cdn.poehali.dev/projects/f3f738c2-69a9-4768-8ef8-93869a09bec0/bucket/0167c553-099c-4f3c-9060-207c227360e5.png" },
  { id: 6, name: "Crimson Kimono", weapon: "StatTrak™", grade: "FN", price: 981746, color: "#ef4444", img: "https://cdn.poehali.dev/projects/f3f738c2-69a9-4768-8ef8-93869a09bec0/bucket/0167c553-099c-4f3c-9060-207c227360e5.png" },
];

const MULTIPLIERS = ["x2", "x4", "x8"];
const CHANCES = ["35%", "55%", "75%"];

const CHANCE_LABELS: Record<string, string> = {
  "35%": "низкий шанс",
  "55%": "средний шанс",
  "75%": "высокий шанс",
};

const CHANCE_COLORS: Record<string, string> = {
  "35%": "#ef4444",
  "55%": "#f59e0b",
  "75%": "#22c55e",
};

function ChanceWheel({ chance, spinning }: { chance: string; spinning: boolean }) {
  const pct = parseInt(chance);
  const r = 80;
  const circumference = 2 * Math.PI * r;
  const arcLength = (pct / 100) * circumference;
  const gapLength = circumference - arcLength;

  const winColor = CHANCE_COLORS[chance] || "#f59e0b";

  return (
    <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
      <svg width="220" height="220" className="absolute">
        <circle cx="110" cy="110" r={r} fill="none" stroke="#2a2a2a" strokeWidth="18" />
        <motion.circle
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="18"
          strokeDasharray={`${gapLength} ${arcLength}`}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
        />
        <motion.circle
          cx="110"
          cy="110"
          r={r}
          fill="none"
          stroke={winColor}
          strokeWidth="18"
          strokeDasharray={`${arcLength} ${gapLength}`}
          strokeDashoffset={circumference * 0.25}
          strokeLinecap="round"
          animate={spinning ? { rotate: [0, 360] } : {}}
          transition={spinning ? { duration: 0.6, repeat: Infinity, ease: "linear" } : {}}
          style={{ transformOrigin: "110px 110px" }}
        />
        <text x="110" y="100" textAnchor="middle" fill={winColor} fontSize="26" fontWeight="bold" fontFamily="Montserrat">
          {chance}
        </text>
        <text x="110" y="125" textAnchor="middle" fill="#888" fontSize="12" fontFamily="Montserrat">
          {CHANCE_LABELS[chance]}
        </text>
        <text x="110" y="60" textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat">100%</text>
        <text x="35" y="114" textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat">50%</text>
        <text x="185" y="114" textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat">50%</text>
      </svg>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: `20px solid ${winColor}` }}
      />
    </div>
  );
}

function SkinCard({ skin, selected, onClick, showPrice = true }: { skin: typeof SKINS[0]; selected?: boolean; onClick?: () => void; showPrice?: boolean }) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded cursor-pointer transition-all duration-200 overflow-hidden border-2 ${selected ? "border-yellow-400 shadow-lg shadow-yellow-400/20" : "border-transparent hover:border-neutral-600"}`}
      style={{ background: "linear-gradient(180deg, #1e1e1e 0%, #141414 100%)" }}
    >
      {showPrice && (
        <div className="px-2 pt-1 flex items-center justify-between">
          <span className="text-xs font-bold" style={{ color: "#f59e0b" }}>
            {skin.price.toLocaleString("ru-RU")} 🪙
          </span>
          <span className="text-xs text-neutral-500">{skin.grade}</span>
        </div>
      )}
      <div className="flex items-center justify-center p-2" style={{ height: 80 }}>
        <img src={skin.img} alt={skin.name} className="w-full h-full object-contain" style={{ filter: "drop-shadow(0 0 8px rgba(228,168,75,0.3))" }} />
      </div>
      <div className="px-2 pb-2">
        <div className="text-xs font-bold text-white truncate">{skin.name}</div>
        <div className="text-xs text-neutral-500 truncate">{skin.weapon}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${skin.color}, transparent)` }} />
    </div>
  );
}

export default function UpgraderGame() {
  const [selectedChance, setSelectedChance] = useState("55%");
  const [selectedMultiplier, setSelectedMultiplier] = useState<string | null>(null);
  const [mySkin, setMySkin] = useState<typeof SKINS[0] | null>(null);
  const [targetSkin, setTargetSkin] = useState<typeof SKINS[0] | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<"win" | "lose" | null>(null);
  const [balance] = useState(2.14);
  const [online] = useState(1318);
  const [totalUpgrades] = useState(52977881);

  function handleUpgrade() {
    if (!mySkin || !targetSkin) return;
    setSpinning(true);
    setResult(null);
    const pct = parseInt(selectedChance);
    setTimeout(() => {
      const won = Math.random() * 100 < pct;
      setSpinning(false);
      setResult(won ? "win" : "lose");
    }, 2000);
  }

  function handleReset() {
    setResult(null);
    setMySkin(null);
    setTargetSkin(null);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#111", color: "#fff", fontFamily: "Montserrat, sans-serif" }}>
      {/* TOP BAR */}
      <div className="flex items-center gap-4 px-4 py-2 border-b border-neutral-800" style={{ background: "#161616", minHeight: 52 }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: "#f59e0b" }}>
            <Icon name="ChevronUp" size={18} className="text-black" />
          </div>
          <span className="font-bold text-sm tracking-wider text-yellow-400">UPGRADER</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-neutral-400 ml-4">
          <Icon name="Users" size={12} className="text-yellow-400" />
          <span className="text-white font-semibold">{online.toLocaleString("ru-RU")}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-neutral-400">
          <Icon name="TrendingUp" size={12} className="text-yellow-400" />
          <span className="text-white font-semibold">{totalUpgrades.toLocaleString("ru-RU")}</span>
          <span className="text-neutral-500">апгрейдов</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm font-bold text-yellow-400">
            <span>🪙</span>
            <span>{balance.toFixed(2)}</span>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold text-black" style={{ background: "linear-gradient(90deg, #f59e0b, #d97706)" }}>
            <Icon name="Plus" size={14} className="text-black" />
            Пополнить
          </button>
          <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
            <Icon name="User" size={16} className="text-neutral-300" />
          </div>
        </div>
      </div>

      {/* TITLE */}
      <div className="text-center py-4">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "#f59e0b" }}>
            <Icon name="ChevronUp" size={14} className="text-black" />
          </div>
          <span className="font-bold tracking-widest text-lg text-yellow-400">UPGRADER</span>
        </div>
      </div>

      {/* MAIN AREA */}
      <div className="flex flex-col lg:flex-row gap-3 px-4 pb-4 flex-1">
        {/* LEFT — my skin */}
        <div className="flex-1 rounded-lg border border-neutral-800 p-4 flex flex-col items-center justify-center min-h-[260px]" style={{ background: "#181818" }}>
          <p className="text-xs text-neutral-400 mb-1 text-center">Выберите скины или скины и баланс для использования</p>
          <p className="text-xs text-neutral-600 mb-4 text-center">Вы можете выбрать несколько скинов</p>
          {mySkin ? (
            <div className="w-full max-w-[160px]">
              <SkinCard skin={mySkin} selected onClick={() => setMySkin(null)} />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 opacity-50">
              <Icon name="ChevronsDown" size={48} className="text-yellow-400" />
              <span className="text-xs text-neutral-500">Выберите скин снизу</span>
            </div>
          )}
          {mySkin && (
            <div className="mt-3 text-xs text-neutral-500">
              Сумма баланса: <span className="text-yellow-400 font-bold">🪙 {mySkin.price.toLocaleString("ru-RU")}</span>
            </div>
          )}
        </div>

        {/* CENTER — wheel */}
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <ChanceWheel chance={selectedChance} spinning={spinning} />

          {result && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-center font-bold text-xl px-6 py-2 rounded ${result === "win" ? "text-green-400" : "text-red-400"}`}
            >
              {result === "win" ? "🎉 Успех! Скин улучшен!" : "💀 Неудача! Попробуй снова!"}
            </motion.div>
          )}

          <button
            onClick={result ? handleReset : handleUpgrade}
            disabled={spinning || (!mySkin && !result)}
            className="flex items-center justify-center gap-2 w-full max-w-[280px] py-3 rounded font-bold text-sm uppercase tracking-wider transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: spinning ? "#555" : "linear-gradient(90deg, #b8960c, #f59e0b, #b8960c)", color: "#000", minWidth: 260 }}
          >
            {spinning ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}>
                  <Icon name="RefreshCw" size={16} className="text-black" />
                </motion.div>
                Прокачиваем...
              </>
            ) : result ? (
              <><Icon name="RefreshCw" size={16} className="text-black" /> Ещё раз</>
            ) : (
              <><Icon name="ChevronsUp" size={16} className="text-black" /> Прокачать</>
            )}
          </button>

          {/* Multiplier + Chance buttons */}
          <div className="flex gap-2 flex-wrap justify-center">
            {MULTIPLIERS.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMultiplier(selectedMultiplier === m ? null : m)}
                className={`px-3 py-1 text-xs rounded border transition-colors ${selectedMultiplier === m ? "border-yellow-400 text-yellow-400 bg-yellow-400/10" : "border-neutral-700 text-neutral-400 hover:border-neutral-500"}`}
              >
                {m}
              </button>
            ))}
            {CHANCES.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedChance(c)}
                className={`px-3 py-1 text-xs rounded border transition-colors font-bold ${selectedChance === c ? "border-yellow-400 text-yellow-400 bg-yellow-400/10" : "border-neutral-700 text-neutral-400 hover:border-neutral-500"}`}
              >
                {c}
              </button>
            ))}
            <button className="px-3 py-1 text-xs rounded border border-neutral-700 text-neutral-400 hover:border-neutral-500">
              <Icon name="Shuffle" size={12} />
            </button>
          </div>
        </div>

        {/* RIGHT — target skin */}
        <div className="flex-1 rounded-lg border border-neutral-800 p-4 flex flex-col items-center justify-center min-h-[260px]" style={{ background: "#181818" }}>
          <p className="text-xs text-neutral-400 mb-4 text-center">Выберите скин для апгрейда</p>
          {targetSkin ? (
            <div className="w-full max-w-[160px]">
              <SkinCard skin={targetSkin} selected onClick={() => setTargetSkin(null)} />
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 opacity-50">
              <Icon name="ChevronsDown" size={48} className="text-yellow-400" />
              <span className="text-xs text-neutral-500">Выберите скин снизу</span>
            </div>
          )}
        </div>
      </div>

      {/* BOTTOM — skin grids */}
      <div className="flex flex-col lg:flex-row gap-3 px-4 pb-6">
        {/* My skins */}
        <div className="flex-1 rounded-lg border border-neutral-800 p-3" style={{ background: "#181818" }}>
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Layers" size={16} className="text-yellow-400" />
            <span className="text-sm font-bold">Мои скины</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {SKINS.map((skin) => (
              <SkinCard
                key={skin.id}
                skin={skin}
                selected={mySkin?.id === skin.id}
                onClick={() => setMySkin(mySkin?.id === skin.id ? null : skin)}
              />
            ))}
          </div>
        </div>

        {/* Market skins */}
        <div className="flex-1 rounded-lg border border-neutral-800 p-3" style={{ background: "#181818" }}>
          <div className="flex items-center gap-2 mb-3">
            <Icon name="ChevronUp" size={16} className="text-yellow-400" />
            <span className="text-sm font-bold">Выберите скин</span>
            <input
              placeholder="Цена"
              className="ml-auto px-2 py-1 text-xs rounded border border-neutral-700 bg-neutral-900 text-neutral-300 w-20 outline-none"
            />
            <input
              placeholder="от"
              className="px-2 py-1 text-xs rounded border border-neutral-700 bg-neutral-900 text-neutral-300 w-14 outline-none"
            />
            <input
              placeholder="до"
              className="px-2 py-1 text-xs rounded border border-neutral-700 bg-neutral-900 text-neutral-300 w-14 outline-none"
            />
            <Icon name="Search" size={14} className="text-neutral-500 cursor-pointer hover:text-white" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {SKINS.map((skin) => (
              <SkinCard
                key={skin.id}
                skin={skin}
                selected={targetSkin?.id === skin.id}
                onClick={() => setTargetSkin(targetSkin?.id === skin.id ? null : skin)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
