const upgrades = [
  {
    percent: "10%",
    label: "Старт",
    desc: "Лёгкий апгрейд — минимальный риск, первый шаг к редкому скину.",
    color: "bg-neutral-100",
  },
  {
    percent: "50%",
    label: "Риск",
    desc: "Золотая середина — шанс получить скин вдвое круче с одной попытки.",
    color: "bg-neutral-900 text-white",
  },
  {
    percent: "70%",
    label: "Ва-банк",
    desc: "Максимальный апгрейд — для тех, кто не боится ставить всё на кон.",
    color: "bg-neutral-100",
  },
];

export default function Featured() {
  return (
    <div id="upgrades" className="min-h-screen px-6 py-20 bg-white flex flex-col justify-center">
      <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500 text-center">Уровни апгрейда</h3>
      <p className="text-3xl lg:text-5xl mb-16 text-neutral-900 leading-tight text-center max-w-2xl mx-auto font-bold">
        Выбери свой риск — апгрейдни скин прямо сейчас
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
        {upgrades.map((u) => (
          <div key={u.percent} className={`${u.color} p-10 flex flex-col justify-between min-h-[320px]`}>
            <div>
              <p className={`text-7xl font-bold tracking-tight mb-2 ${u.color.includes("900") ? "text-white" : "text-neutral-900"}`}>
                {u.percent}
              </p>
              <p className={`uppercase text-xs tracking-widest mb-4 ${u.color.includes("900") ? "text-neutral-400" : "text-neutral-500"}`}>
                {u.label}
              </p>
              <p className={`text-sm leading-relaxed ${u.color.includes("900") ? "text-neutral-300" : "text-neutral-600"}`}>
                {u.desc}
              </p>
            </div>
            <button className={`mt-8 border px-4 py-2 text-xs uppercase tracking-wide transition-all duration-300 w-fit cursor-pointer ${u.color.includes("900") ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}>
              Апгрейд
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}