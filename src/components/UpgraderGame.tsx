import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/icon";

const CDN = "https://community.akamai.steamstatic.com/economy/image/";

const SKINS = [
  { id: 1,  name: "Pandora's Box",  weapon: "Sport Gloves",          grade: "FN", price: 1899605, color: "#a855f7", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIGR3iLNngYAAOAu5WdRoTuV_KJbNuWevnOT6Kjbm9kYPml7m7JAdlx4I69ZTclFzl8ixbRml-v0yxkuuiJpTKh4Dnn1Rs5MO2hIGJMm0Y6A" },
  { id: 2,  name: "Howl",           weapon: "M4A4",                   grade: "FN", price: 1518405, color: "#e03b3b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jgp2qOOplr6iI1ZQvfVmxOKkiNClZvPrNb_nHG2D5h3h5rnHi93NN3HQrPBt8-JdA" },
  { id: 3,  name: "Gungnir",        weapon: "AWP",                    grade: "FN", price: 1278435, color: "#3b82f6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JoVW3ObnZVRhiqHbI2oSv4WpYuDiNuPRabC_j3tu28Qnjb6RiA" },
  { id: 4,  name: "Dragon Lore",    weapon: "AWP",                    grade: "FN", price: 1180953, color: "#e4a84b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpKumY2dlrqiJVRx0PV4jYSFhI--YPn5b2JT9sBgiLjHuqbGplOh" },
  { id: 5,  name: "Doppler Ruby",   weapon: "★ Butterfly Knife",      grade: "FN", price: 1105962, color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBCgamtYO7hbmNX3_Zyk4eNnY63ZfTmMuiDl2dg5MuL" },
  { id: 6,  name: "Gungnir",        weapon: "AWP",                    grade: "MW", price: 1002682, color: "#3b82f6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JoVW3ObnZVRhiqHbI2oSv4WpYuDiNuPRabC_j3tu28Qnjb6RiA" },
  { id: 7,  name: "Crimson Kimono", weapon: "★ Specialist Gloves",    grade: "FN", price: 981746,  color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jh9EjIWfhYSzmlRwNYQj5Y6MmNXiZr31gGL-u2plUOrpQg" },
  { id: 8,  name: "Dragon Lore",    weapon: "AWP",                    grade: "MW", price: 900242,  color: "#e4a84b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpKumY2dlrqiJVRx0PV4jYSFhI--YPn5b2JT9sBgiLjHuqbGplOh" },
  { id: 9,  name: "Doppler Ruby",   weapon: "★ StatTrak™ Butterfly Knife", grade: "FN", price: 894429, color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBCgamtYO7hbmNX3_Zyk4eNnY63ZfTmMuiDl2dg5MuL" },
  { id: 10, name: "Howl",           weapon: "★ StatTrak™ M4A4",       grade: "MW", price: 872649,  color: "#e03b3b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jgp2qOOplr6iI1ZQvfVmxOKkiNClZvPrNb_nHG2D5h3h5rnHi93NN3HQrPBt8-JdA" },
  { id: 11, name: "Gamma Doppler",  weapon: "★ Butterfly Knife",      grade: "FN", price: 852550,  color: "#22c55e", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBCgamtYO7hbmNX3_ZymoL7ZPXiY-6kY-jXxWxqsL0" },
  { id: 12, name: "Doppler Ruby",   weapon: "★ StatTrak™ M9 Bayonet", grade: "FN", price: 852299,  color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6J4lCs-ilIFK-mPM-s2dQ6orlhNaIkOr5b2JT9sBgiLjHuqbKnJFhFg" },
  { id: 13, name: "Hedge Maze",     weapon: "★ Sport Gloves",         grade: "MW", price: 832836,  color: "#22c55e", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JoZB1oaknc2iK1ZW3fFijYCMl4-eFfSmNbnMoW0BsLrchw" },
  { id: 14, name: "Gungnir",        weapon: "AWP",                    grade: "WW", price: 808023,  color: "#3b82f6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JoVW3ObnZVRhiqHbI2oSv4WpYuDiNuPRabC_j3tu28Qnjb6RiA" },
  { id: 15, name: "Doppler Black P.", weapon: "★ M9 Bayonet",         grade: "FN", price: 800175,  color: "#1e293b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6J4lCs-ilIFK-mPM-s2dQ6orlhNaIkOr5b2JT9sBgiLjHuqbKnJFhFg" },
  { id: 16, name: "Wild Lotus",     weapon: "AK-47",                  grade: "FT", price: 789158,  color: "#22c55e", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCB" },
  { id: 17, name: "Gungnir",        weapon: "AWP",                    grade: "BS", price: 780511,  color: "#3b82f6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JoVW3ObnZVRhiqHbI2oSv4WpYuDiNuPRabC_j3tu28Qnjb6RiA" },
  { id: 18, name: "Doppler Ruby",   weapon: "★ StatTrak™ Karambit",   grade: "FN", price: 770660,  color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBQu4jNIFe5mPZ9edGVmNaXkejlZ-n7b3tt5MtxxLyihtWA0" },
  { id: 19, name: "Doppler Ruby",   weapon: "★ Karambit",             grade: "FN", price: 769382,  color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBQu4jNIFe5mPZ9edGVmNaXkejlZ-n7b3tt5MtxxLyihtWA0" },
  { id: 20, name: "Howl",           weapon: "★ StatTrak™ M4A4",       grade: "FT", price: 721420,  color: "#e03b3b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jgp2qOOplr6iI1ZQvfVmxOKkiNClZvPrNb_nHG2D5h3h5rnHi93NN3HQrPBt8-JdA" },
  { id: 21, name: "Howl",           weapon: "M4A4",                   grade: "FN", price: 674298,  color: "#e03b3b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jgp2qOOplr6iI1ZQvfVmxOKkiNClZvPrNb_nHG2D5h3h5rnHi93NN3HQrPBt8-JdA" },
  { id: 22, name: "Doppler Sapphire", weapon: "★ StatTrak™ Butterfly Knife", grade: "MW", price: 670822, color: "#3b82f6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBCgamtYO7hbmNX3_ZykoDdZufhMuiDl2dg5MuL" },
  { id: 23, name: "Dragon Lore",    weapon: "AWP",                    grade: "FT", price: 656980,  color: "#e4a84b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpKumY2dlrqiJVRx0PV4jYSFhI--YPn5b2JT9sBgiLjHuqbGplOh" },
  { id: 24, name: "Doppler Sapphire", weapon: "★ Butterfly Knife",    grade: "FN", price: 656389,  color: "#3b82f6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBCgamtYO7hbmNX3_ZykoDdZufhMuiDl2dg5MuL" },
  { id: 25, name: "Crimson Web",    weapon: "★ Butterfly Knife",      grade: "FN", price: 636135,  color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JpBCgamtYO7hbmNX3_ZykIDIZ7DhZr2Dk2dg5MuL" },
  { id: 26, name: "Pandora's Box",  weapon: "★ Sport Gloves",         grade: "MW", price: 628439,  color: "#a855f7", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JoZB1oaknc2iK1ZW3fFijYCMl4-eFfSmNbnMoW0Bs8r" },
  { id: 27, name: "Emerald Web",    weapon: "★ Specialist Gloves",    grade: "FN", price: 617652,  color: "#22c55e", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jh9EjIWfhYSzmlRwNYQj5Y6MmNXiZr31gGL-u2plUOrpQ" },
  { id: 28, name: "Howl",           weapon: "M4A4",                   grade: "WW", price: 578234,  color: "#e03b3b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jgp2qOOplr6iI1ZQvfVmxOKkiNClZvPrNb_nHG2D5h3h5rnHi93NN3HQrPBt8-JdA" },
  { id: 29, name: "Hydroponic",     weapon: "AK-47",                  grade: "FN", price: 543550,  color: "#22c55e", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBnWmV" },
  { id: 30, name: "Fire Serpent",   weapon: "★ StatTrak™ AK-47",      grade: "FN", price: 524250,  color: "#f97316", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBTg" },
  { id: 31, name: "Re.built",       weapon: "★ StatTrak™ P250",       grade: "BS", price: 9140,    color: "#94a3b8", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6J4dWzqqsk7TQJW1k1a2Ck4mXhIDqY_PdIG-j11h45MqOhNXm" },
  { id: 32, name: "Re.built",       weapon: "★ StatTrak™ P250",       grade: "FT", price: 9140,    color: "#94a3b8", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6J4dWzqqsk7TQJW1k1a2Ck4mXhIDqY_PdIG-j11h45MqOhNXm" },
  { id: 33, name: "Cyberforce",     weapon: "★ StatTrak™ SG 553",     grade: "FT", price: 9140,    color: "#6366f1", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBYg" },
  { id: 34, name: "Dezastre",       weapon: "★ StatTrak™ SSG 08",     grade: "WW", price: 9140,    color: "#8b5cf6", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBUA" },
  { id: 35, name: "Tiger Stencil",  weapon: "Tec-9",                  grade: "MW", price: 9140,    color: "#f59e0b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBSw" },
  { id: 36, name: "Choppa",         weapon: "M4A4",                   grade: "BS", price: 9140,    color: "#f59e0b", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6Jgp2qOOplr6iI1ZQvfVmxOKkiNClZvPrNb_nHG2D5h3h5rnHi" },
  { id: 37, name: "Focus",          weapon: "MP5-SD",                 grade: "BS", price: 9140,    color: "#94a3b8", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBZA" },
  { id: 38, name: "Nexus",          weapon: "MP5",                    grade: "FT", price: 9140,    color: "#6366f1", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBPQ" },
  { id: 39, name: "Popdog",         weapon: "MAG-7",                  grade: "MW", price: 3733,    color: "#f97316", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBLg" },
  { id: 40, name: "Warm Blooded",   weapon: "UMP-45",                 grade: "WW", price: 3809,    color: "#ef4444", img: CDN + "-9a81dlWLwJ74UWGnFktu6_h1nzNmcJDqkZXRP0s6YRBnmg7jXlbWzMBXXeV3JIFHTXh5TXRSWCYkN29wMDBGRkJ8T_p9W1h6JolSuZKMnIGekLtmO6P7koaNkYKUluLzMLe_kGUMsBjj0rCBcg" },
];

const MULTIPLIERS = ["x2", "x4", "x8"];
const CHANCES = ["35%", "55%", "75%"];

const CHANCE_LABELS: Record<string, string> = {
  "35%": "низкий шанс",
  "55%": "средний шанс",
  "75%": "высокий шанс",
};

// --- Wheel SVG ---
function ChanceWheel({ chance, spinning, arrowAngle }: { chance: string; spinning: boolean; arrowAngle: number }) {
  const SIZE = 280;
  const cx = SIZE / 2;
  const cy = SIZE / 2;
  const R_OUTER = 118;
  const R_INNER = 96;
  const pct = parseInt(chance);

  // Arc spans from -180deg (left) to 0deg (right), going bottom — like a speedometer
  // We draw gradient arc from -180 to 0 (bottom half circle)
  // Win zone is left part (red→orange→yellow), lose zone is dark
  // Arrow at bottom points up, rotates based on arrowAngle

  // Tick marks around full circle
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

  // Gradient arc — bottom semicircle from left to right (red → orange → yellow)
  // We use a conic gradient via foreignObject approach or multiple arcs
  // Let's draw arc segments for gradient effect
  const gradientStops = [
    { pct: 0, color: "#ef4444" },
    { pct: 0.3, color: "#f97316" },
    { pct: 0.6, color: "#f59e0b" },
    { pct: 1, color: "#eab308" },
  ];

  // Arc from 180deg to 360deg (bottom semicircle), sweeping right
  // Win zone covers `pct`% of the arc
  const winArcDeg = (pct / 100) * 180; // how many degrees of the semicircle are "win"

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

  // Bottom semicircle spans 180deg → 360deg
  // We draw gradient segments for the win zone
  const segCount = 30;
  const arcSegments = Array.from({ length: segCount }, (_, i) => {
    const t0 = i / segCount;
    const t1 = (i + 1) / segCount;
    const a0 = 180 + t0 * 180;
    const a1 = 180 + t1 * 180;
    // color interpolation red→yellow
    const r = Math.round(239 + (234 - 239) * t0);
    const g = Math.round(68 + (179 - 68) * t0);
    const b = Math.round(68 + (8 - 68) * t0);
    return { a0, a1, color: `rgb(${r},${g},${b})` };
  });

  // Lose zone: top semicircle (0 → 180 deg) — dark
  const loseArcPath = arcPath(0, 180, R_OUTER, R_INNER);

  // Dark segment on right side based on win%: from (180 + winArcDeg) to 360
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

        {/* Background circle */}
        <circle cx={cx} cy={cy} r={R_OUTER + 2} fill="#1a1a1a" />

        {/* Tick marks */}
        {ticks.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
            stroke={t.isMajor ? "#444" : "#2a2a2a"} strokeWidth={t.isMajor ? 1.5 : 1} />
        ))}

        {/* Lose zone (top, dark) */}
        <path d={loseArcPath} fill="#222" />

        {/* Win zone gradient segments (bottom) */}
        {arcSegments.map((seg, i) => (
          <path key={i} d={arcPath(seg.a0, seg.a1, R_OUTER, R_INNER)} fill={seg.color} />
        ))}

        {/* Dark overlay for lose% on bottom right */}
        {hasDarkRight && (
          <path d={arcPath(darkStartDeg, 360, R_OUTER, R_INNER)} fill="#222" />
        )}

        {/* Inner dark circle */}
        <circle cx={cx} cy={cy} r={R_INNER - 2} fill="#181818" />

        {/* Subtle inner ring */}
        <circle cx={cx} cy={cy} r={R_INNER - 2} fill="none" stroke="#2a2a2a" strokeWidth="1" />

        {/* Center logo chevron */}
        <text x={cx} y={cy - 10} textAnchor="middle" fill="#2a2a2a" fontSize="36" fontWeight="bold">⌃</text>

        {/* Chance text */}
        <text x={cx} y={cy + 14} textAnchor="middle" fill="#4ade80" fontSize="28" fontWeight="bold" fontFamily="Montserrat, sans-serif">
          {pct}.00%
        </text>
        <text x={cx} y={cy + 34} textAnchor="middle" fill="#4ade80" fontSize="11" fontFamily="Montserrat, sans-serif">
          {CHANCE_LABELS[chance]}
        </text>

        {/* Labels: 100% top, 50% left/right */}
        <text x={cx} y={cy - R_OUTER - 18} textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat, sans-serif">100%</text>
        <text x={cx - R_OUTER - 18} y={cy + 4} textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat, sans-serif">50%</text>
        <text x={cx + R_OUTER + 18} y={cy + 4} textAnchor="middle" fill="#555" fontSize="10" fontFamily="Montserrat, sans-serif">50%</text>

        {/* Arrow at bottom — rotates during spin */}
        <motion.g
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          animate={spinning ? { rotate: [0, 360 * 5 + arrowAngle] } : { rotate: arrowAngle }}
          transition={spinning ? { duration: 2, ease: [0.2, 0.8, 0.6, 1] } : { duration: 0.4 }}
        >
          {/* Arrow pointer at bottom (270deg = bottom) */}
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

        {/* Glow on bottom arc edge */}
        <circle cx={cx} cy={cy} r={R_OUTER} fill="none"
          stroke="rgba(245,158,11,0.08)" strokeWidth="4" />
      </svg>
    </div>
  );
}

function SkinCard({ skin, selected, onClick }: { skin: typeof SKINS[0]; selected?: boolean; onClick?: () => void }) {
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

export default function UpgraderGame() {
  const [selectedChance, setSelectedChance] = useState("55%");
  const [selectedMultiplier, setSelectedMultiplier] = useState<string | null>(null);
  const [mySkin, setMySkin] = useState<typeof SKINS[0] | null>(null);
  const [targetSkin, setTargetSkin] = useState<typeof SKINS[0] | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<"win" | "lose" | null>(null);
  const [arrowAngle, setArrowAngle] = useState(0);
  const [balance] = useState(2.14);
  const [online] = useState(1318);
  const [totalUpgrades] = useState(52977881);
  const [marketSearch, setMarketSearch] = useState("");
  const [marketMin, setMarketMin] = useState("");
  const [marketMax, setMarketMax] = useState("");

  function handleUpgrade() {
    if (!mySkin || !targetSkin) return;
    setSpinning(true);
    setResult(null);
    const pct = parseInt(selectedChance);
    const won = Math.random() * 100 < pct;
    // Arrow lands in win zone (left half bottom = 180-360) or lose (0-180)
    const finalAngle = won
      ? 180 + Math.random() * (pct / 100) * 180  // inside win arc
      : Math.random() * 180; // lose zone
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

  const filteredMarket = SKINS.filter((s) => {
    const matchName = !marketSearch || s.name.toLowerCase().includes(marketSearch.toLowerCase()) || s.weapon.toLowerCase().includes(marketSearch.toLowerCase());
    const matchMin = !marketMin || s.price >= parseInt(marketMin);
    const matchMax = !marketMax || s.price <= parseInt(marketMax);
    return matchName && matchMin && matchMax;
  });

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
      <div className="flex flex-col lg:flex-row gap-3 px-5 pb-3" style={{ flex: "0 0 auto" }}>

        {/* LEFT PANEL */}
        <div className="flex-1 rounded-lg border border-neutral-800 p-5 flex flex-col" style={{ background: "#1a1a1a", minHeight: 280 }}>
          <p className="text-sm font-bold text-white text-center mb-1">Выберите скины или скины и баланс для использования</p>
          <p className="text-xs text-neutral-500 text-center mb-6">Вы можете выбрать несколько скинов</p>

          <div className="flex-1 flex items-center justify-center relative">
            {/* Background gun silhouette */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <img src={SKINS[0].img} alt="" className="w-48 h-32 object-contain" style={{ filter: "grayscale(1) brightness(0.3)" }} />
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

          {/* UPGRADE BUTTON */}
          <button
            onClick={result ? handleReset : handleUpgrade}
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

          {/* Multipliers + Chances */}
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
              <img src={SKINS[0].img} alt="" className="w-48 h-32 object-contain" style={{ filter: "grayscale(1) brightness(0.3)" }} />
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

      {/* BOTTOM GRIDS */}
      <div className="flex flex-col lg:flex-row gap-3 px-5 pb-6">
        {/* My skins */}
        <div className="flex-1 rounded-lg border border-neutral-800 p-4" style={{ background: "#1a1a1a" }}>
          <div className="flex items-center gap-2 mb-3">
            <Icon name="Layers" size={15} className="text-yellow-400" />
            <span className="text-sm font-bold">Мои скины</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-72 overflow-y-auto pr-1"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#444 #1a1a1a" }}>
            {SKINS.map((skin) => (
              <SkinCard key={skin.id} skin={skin}
                selected={mySkin?.id === skin.id}
                onClick={() => setMySkin(mySkin?.id === skin.id ? null : skin)} />
            ))}
          </div>
        </div>

        {/* Market */}
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
                selected={targetSkin?.id === skin.id}
                onClick={() => setTargetSkin(targetSkin?.id === skin.id ? null : skin)} />
            ))}
            {filteredMarket.length === 0 && (
              <div className="col-span-5 text-center text-neutral-600 text-xs py-8">Скины не найдены</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}