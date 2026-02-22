const SERVICES = [
  {
    id: "barre",
    title: "Barre",
    image: "barre.jpg",
    desc: "Тренировка у станка: сила, тонус, осанка и контроль. Много работы на ноги/ягодицы/кор.",
    tags: ["тон", "осанка", "кор"],
  },
  {
    id: "stretching",
    title: "Stretching",
    image: "stretching.jpg",
    desc: "Растяжка и мобильность: мягко раскрываем диапазон движений, снимаем зажимы.",
    tags: ["гибкость", "мобилити"],
  },
  {
    id: "pilates",
    title: "Pilates",
    image: "pilates.jpg",
    desc: "Контроль тела, дыхание и стабилизация. Отлично для спины и укрепления корпуса.",
    tags: ["спина", "стабилизация"],
  },
  {
    id: "functional",
    title: "Functional",
    image: "functional.jpg",
    desc: "Функциональные связки на всё тело: сила + координация + выносливость.",
    tags: ["сила", "энергия"],
  },
];

function getServiceImage(file) {
  // Будет работать, когда файл реально лежит в src/assets/services/
  // Если файла нет — вернём null и покажем плейсхолдер.
  try {
    return new URL(`../assets/services/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

export default function Services() {
  return (
    <div className="container" style={{ padding: "22px 0 40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Все виды услуг</h1>
        <p className="p">Выбери направление и посмотри описание. Фото подтянутся из локальных файлов.</p>
      </div>

      <div className="grid cols-2" style={{ marginTop: 14 }}>
        {SERVICES.map((s) => {
          const img = getServiceImage(s.image);

          return (
            <div key={s.id} className="glass" style={{ overflow: "hidden" }}>
              <div
                style={{
                  height: 160,
                  background: img
                    ? `url(${img}) center/cover no-repeat`
                    : "linear-gradient(135deg, rgba(124,92,255,.22), rgba(0,229,255,.16))",
                  borderBottom: "1px solid rgba(255,255,255,.10)",
                }}
              />

              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 18, fontWeight: 900 }}>{s.title}</div>
                <p className="p">{s.desc}</p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {s.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass" style={{ padding: 14, marginTop: 14, color: "var(--muted)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <b style={{ color: "var(--text)" }}>Важно:</b> чтобы появились реальные фото, положи файлы в
          <code style={{ padding: "2px 6px", borderRadius: 8, marginLeft: 6, border: "1px solid rgba(255,255,255,.12)" }}>
            src/assets/services/
          </code>
          и назови их:
          <code style={{ padding: "2px 6px", borderRadius: 8, marginLeft: 6, border: "1px solid rgba(255,255,255,.12)" }}>
            barre.jpg, stretching.jpg, pilates.jpg, functional.jpg
          </code>
        </div>
      </div>
    </div>
  );
}
