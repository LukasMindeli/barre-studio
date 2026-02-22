const TRAINERS = [
  {
    id: "anna",
    name: "Анна",
    photo: "anna.jpg",
    role: "Балет • Barre",
    desc: "Постановка техники, осанка, легкость и точность движений. Фокус: линии тела, контроль, эстетика и дисциплина.",
    tags: ["балет", "barre", "осанка"],
  },
  {
    id: "maria",
    name: "Мария",
    photo: "maria.jpg",
    role: "Stretching • Pilates",
    desc: "Растяжка и пилатес безопасно: дыхание, мягкая прогрессия, мобильность и укрепление корпуса без перегруза.",
    tags: ["stretching", "pilates", "mobility"],
  },
  {
    id: "kate",
    name: "Катя",
    photo: "kate.jpg",
    role: "Функциональный тренинг",
    desc: "Функциональные тренировки на всё тело: сила, координация и выносливость. Чётко, энергично, с прогрессией.",
    tags: ["functional", "сила", "энергия"],
  },
];

function getTrainerPhoto(file) {
  try {
    return new URL(`../assets/trainers/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

export default function Trainers() {
  return (
    <div className="container" style={{ padding: "22px 0 40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Тренера</h1>
        <p className="p">Команда Barre Studio. Фото подтягиваются из локальных файлов.</p>
      </div>

      <div className="grid cols-2" style={{ marginTop: 14 }}>
        {TRAINERS.map((t) => {
          const img = getTrainerPhoto(t.photo);

          return (
            <div key={t.id} className="glass" style={{ padding: 16, display: "flex", gap: 14 }}>
              <div
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: 18,
                  flex: "0 0 auto",
                  border: "1px solid rgba(255,255,255,.10)",
                  background: img
                    ? `url(${img}) center/cover no-repeat`
                    : "linear-gradient(135deg, rgba(124,92,255,.20), rgba(0,229,255,.14))",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <div style={{ fontSize: 18, fontWeight: 900, lineHeight: 1.2 }}>{t.name}</div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{t.role}</div>
                </div>

                <p className="p" style={{ marginTop: 2 }}>{t.desc}</p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {t.tags.map((tag) => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
