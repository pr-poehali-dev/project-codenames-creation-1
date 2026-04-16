import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SKINS, type Skin } from "./skinsData";
import SkinCard from "./SkinCard";

interface SkinGridProps {
  selectedSkin: Skin | null;
  onSelect: (skin: Skin | null) => void;
  mode: "my" | "market";
}

export default function SkinGrid({ selectedSkin, onSelect, mode }: SkinGridProps) {
  const [marketSearch, setMarketSearch] = useState("");
  const [marketMin, setMarketMin] = useState("");
  const [marketMax, setMarketMax] = useState("");

  const filteredMarket = SKINS.filter((s) => {
    const matchName = !marketSearch || s.name.toLowerCase().includes(marketSearch.toLowerCase()) || s.weapon.toLowerCase().includes(marketSearch.toLowerCase());
    const matchMin = !marketMin || s.price >= parseInt(marketMin);
    const matchMax = !marketMax || s.price <= parseInt(marketMax);
    return matchName && matchMin && matchMax;
  });

  if (mode === "my") {
    return (
      <div className="flex-1 rounded-lg border border-neutral-800 p-4" style={{ background: "#1a1a1a" }}>
        <div className="flex items-center gap-2 mb-3">
          <Icon name="Layers" size={15} className="text-yellow-400" />
          <span className="text-sm font-bold">Мои скины</span>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#444 #1a1a1a" }}>
          {SKINS.map((skin) => (
            <SkinCard key={skin.id} skin={skin}
              selected={selectedSkin?.id === skin.id}
              onClick={() => onSelect(selectedSkin?.id === skin.id ? null : skin)} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 rounded-lg border border-neutral-800 p-4" style={{ background: "#1a1a1a" }}>
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <Icon name="ChevronsUp" size={15} className="text-yellow-400" />
        <span className="text-sm font-bold">Выберите скин</span>
        <div className="ml-auto flex gap-1.5 flex-wrap">
          <input
            placeholder="Поиск..."
            value={marketSearch}
            onChange={(e) => setMarketSearch(e.target.value)}
            className="px-2 py-1 text-xs rounded border border-neutral-700 bg-neutral-900 text-neutral-300 w-28 outline-none focus:border-yellow-500"
          />
          <input
            placeholder="от 🪙"
            value={marketMin}
            onChange={(e) => setMarketMin(e.target.value)}
            className="px-2 py-1 text-xs rounded border border-neutral-700 bg-neutral-900 text-neutral-300 w-16 outline-none focus:border-yellow-500"
          />
          <input
            placeholder="до 🪙"
            value={marketMax}
            onChange={(e) => setMarketMax(e.target.value)}
            className="px-2 py-1 text-xs rounded border border-neutral-700 bg-neutral-900 text-neutral-300 w-16 outline-none focus:border-yellow-500"
          />
          <button className="w-7 h-7 flex items-center justify-center rounded border border-neutral-700 bg-neutral-800 hover:border-yellow-500 transition-colors">
            <Icon name="Search" size={12} className="text-neutral-400" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#444 #1a1a1a" }}>
        {filteredMarket.map((skin) => (
          <SkinCard key={skin.id} skin={skin}
            selected={selectedSkin?.id === skin.id}
            onClick={() => onSelect(selectedSkin?.id === skin.id ? null : skin)} />
        ))}
        {filteredMarket.length === 0 && (
          <div className="col-span-5 text-center text-neutral-600 text-xs py-8">Скины не найдены</div>
        )}
      </div>
    </div>
  );
}
