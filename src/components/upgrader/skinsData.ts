const CDN = "https://community.akamai.steamstatic.com/economy/image/";

export interface Skin {
  id: number;
  name: string;
  weapon: string;
  grade: string;
  price: number;
  color: string;
  img: string;
}

export const SKINS: Skin[] = [
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

export const MULTIPLIERS = ["x2", "x4", "x8"];
export const CHANCES = ["35%", "55%", "75%"];

export const CHANCE_LABELS: Record<string, string> = {
  "35%": "низкий шанс",
  "55%": "средний шанс",
  "75%": "высокий шанс",
};

export default SKINS;
