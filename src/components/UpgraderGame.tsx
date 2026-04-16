import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SKINS, type Skin } from "./upgrader/skinsData";
import UpgradeWheel from "./upgrader/UpgradeWheel";
import SkinGrid from "./upgrader/SkinGrid";

export default function UpgraderGame() {
  const [selectedChance, setSelectedChance] = useState("55%");
  const [selectedMultiplier, setSelectedMultiplier] = useState<string | null>(null);
  const [mySkin, setMySkin] = useState<Skin | null>(null);
  const [targetSkin, setTargetSkin] = useState<Skin | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<"win" | "lose" | null>(null);
  const [arrowAngle, setArrowAngle] = useState(0);
  const [balance] = useState(2.14);
  const [online] = useState(1318);
  const [totalUpgrades] = useState(52977881);

  function handleUpgrade() {
    if (!mySkin || !targetSkin) return;
    setSpinning(true);
    setResult(null);
    const pct = parseInt(selectedChance);
    const won = Math.random() * 100 < pct;
    const finalAngle = won
      ? 180 + Math.random() * (pct / 100) * 180
      : Math.random() * 180;
    setTimeout(() => {
      setArrowAngle(finalAngle);
      setSpinning(false);
      setResult(won ? "win" : "lose");
    }, 2200);
  }

  function handleReset() {
    setResult(null);
    setMySkin(null);
    setTargetSkin(null);
    setArrowAngle(0);
  }

  const canUpgrade = !!mySkin && !!targetSkin && !spinning;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#111", color: "#fff", fontFamily: "Montserrat, sans-serif" }}>

      {/* TOP BAR */}
      <div className="flex items-center gap-4 px-5 py-2 border-b border-neutral-800" style={{ background: "#161616" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "#f59e0b" }}>
            <Icon name="ChevronsUp" size={15} className="text-black" />
          </div>
          <span className="font-bold text-sm tracking-widest text-yellow-400">UPGRADER</span>
        </div>
        <div className="flex items-center gap-1 text-xs ml-3">
          <Icon name="Users" size={11} className="text-yellow-500" />
          <span className="text-white font-bold">{online.toLocaleString("ru-RU")}</span>
          <span className="text-neutral-500 ml-1">онлайн</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <Icon name="TrendingUp" size={11} className="text-yellow-500" />
          <span className="text-white font-bold">{totalUpgrades.toLocaleString("ru-RU")}</span>
          <span className="text-neutral-500 ml-1">апгрейдов</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-yellow-400 font-bold text-sm">🪙 {balance.toFixed(2)}</span>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold text-black"
            style={{ background: "linear-gradient(90deg, #ca8a04, #f59e0b)" }}>
            <Icon name="Lock" size={12} className="text-black" />
            Пополнить
          </button>
          <div className="w-8 h-8 rounded-full bg-neutral-700 overflow-hidden flex items-center justify-center">
            <Icon name="User" size={15} className="text-neutral-300" />
          </div>
        </div>
      </div>

      {/* PAGE TITLE */}
      <div className="flex items-center justify-center gap-2 py-3">
        <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "#f59e0b" }}>
          <Icon name="ChevronsUp" size={15} className="text-black" />
        </div>
        <span className="font-bold tracking-widest text-base text-yellow-400">UPGRADER</span>
      </div>

      {/* TOOLBAR */}
      <div className="flex items-center gap-3 px-5 pb-3">
        <button className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center hover:border-yellow-400 transition-colors">
          <Icon name="Info" size={13} className="text-neutral-400" />
        </button>
        <button className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center hover:border-yellow-400 transition-colors">
          <Icon name="Volume2" size={13} className="text-neutral-400" />
        </button>
        <button className="w-7 h-7 rounded-full border border-neutral-700 flex items-center justify-center hover:border-yellow-400 transition-colors">
          <Icon name="Zap" size={13} className="text-neutral-400" />
        </button>
      </div>

      {/* MAIN 3-COL LAYOUT */}
      <UpgradeWheel
        selectedChance={selectedChance}
        setSelectedChance={setSelectedChance}
        selectedMultiplier={selectedMultiplier}
        setSelectedMultiplier={setSelectedMultiplier}
        spinning={spinning}
        arrowAngle={arrowAngle}
        result={result}
        canUpgrade={canUpgrade}
        mySkin={mySkin}
        targetSkin={targetSkin}
        setMySkin={setMySkin}
        setTargetSkin={setTargetSkin}
        onUpgrade={handleUpgrade}
        onReset={handleReset}
        firstSkinImg={SKINS[0].img}
      />

      {/* BOTTOM GRIDS */}
      <div className="flex flex-col lg:flex-row gap-3 px-5 pb-6">
        <SkinGrid selectedSkin={mySkin} onSelect={setMySkin} mode="my" />
        <SkinGrid selectedSkin={targetSkin} onSelect={setTargetSkin} mode="market" />
      </div>
    </div>
  );
}
