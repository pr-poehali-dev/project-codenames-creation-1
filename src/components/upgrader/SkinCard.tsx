import { type Skin } from "./skinsData";

interface SkinCardProps {
  skin: Skin;
  selected?: boolean;
  onClick?: () => void;
}

export default function SkinCard({ skin, selected, onClick }: SkinCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded cursor-pointer transition-all duration-200 overflow-hidden border-2 ${selected ? "border-yellow-400 shadow-lg shadow-yellow-400/20" : "border-transparent hover:border-neutral-600"}`}
      style={{ background: "linear-gradient(180deg, #1e1e1e 0%, #141414 100%)" }}
    >
      <div className="px-2 pt-1 flex items-center justify-between">
        <span className="text-xs font-bold" style={{ color: "#f59e0b" }}>
          {skin.price.toLocaleString("ru-RU")} 🪙
        </span>
        <span className="text-xs text-neutral-500">{skin.grade}</span>
      </div>
      <div className="flex items-center justify-center p-2" style={{ height: 72 }}>
        <img src={skin.img} alt={skin.name} className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 0 8px rgba(228,168,75,0.3))" }} />
      </div>
      <div className="px-2 pb-2">
        <div className="text-xs font-bold text-white truncate">{skin.name}</div>
        <div className="text-xs text-neutral-500 truncate">{skin.weapon}</div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${skin.color}, transparent)` }} />
    </div>
  );
}
