const TRAINERS = [
  {
    id: "anna",
    name: "Анна",
    photo: "anna.jpg",
    role: "Barre • Pilates",
    desc: "Ставит технику с нуля, любит понятные шаги и мягкую дисциплину. Фокус: осанка, кор, тонус.",
    tags: ["barre", "pilates"],
  },
  {
    id: "maria",
    name: "Мария",
    photo: "maria.jpg",
    role: "Stretching • Mobility",
    desc: "Работает с гибкостью безопасно: суставная подготовка, дыхание, постепенная амплитуда.",
    tags: ["stretching", "mobility"],
  },
  {
    id: "kate",
    name: "Катя",
    photo: "kate.jpg",
    role: "Functional",
    desc: "Функциональные тренировки на всё тело: сила, выносливость и энергия без перегруза.",
    tags: ["functional"],
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
        <p className="p">Команда Barre Studio. Фото подтянутся из локальных файлов.</p>
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

      <div className="glass" style={{ padding: 14, marginTop: 14, color: "var(--muted)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <b style={{ color: "var(--text)" }}>Фото:</b> положи файлы в
          <code style={{ padding: "2px 6px", borderRadius: 8, marginLeft: 6, border: "1px solid rgba(255,255,255,.12)" }}>
            src/assets/trainers/
          </code>
          и назови их:
          <code style={{ padding: "2px 6px", borderRadius: 8, marginLeft: 6, border: "1px solid rgba(255,255,255,.12)" }}>
            anna.jpg, maria.jpg, kate.jpg
          </code>
        </div>
      </div>
    </div>
  );
}
