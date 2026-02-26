import { TELEGRAM_URL } from "../data/content";

const TRAINERS = [
  {
    id: "anna",
    name: "Анна",
    role: "Балет • Barre",
    image: "anna.jpg",
    desc: "Постановка техніки, постава, легкість і точність рухів. Фокус: лінії тіла, контроль і дисципліна.",
    tags: ["балет", "barre", "постава"],
  },
  {
    id: "maria",
    name: "Марія",
    role: "Stretching • Pilates",
    image: "maria.jpg",
    desc: "М’яка прогресія для гнучкості та контролю. Дихання, мобільність і безпечне укріплення корпусу.",
    tags: ["stretching", "pilates", "мобільність"],
  },
  {
    id: "katya",
    name: "Катя",
    role: "Functional",
    image: "katya.jpg",
    desc: "Функціональні тренування на все тіло: сила, координація й витривалість. Чітко, енергійно, з прогресією.",
    tags: ["functional", "сила", "енергія"],
  },
];

function getTrainerImage(file) {
  try {
    return new URL(`../assets/trainers/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

export default function Trainers() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(26px, 4.2vw, 44px)" }}>
          Тренери
        </h1>
        <p className="p" style={{ marginTop: 10, maxWidth: 860 }}>
          Наша команда. Щоб записатися — напишіть у Telegram і вкажіть напрям та зручний час.
        </p>

        <a
          className="btn btnPrimary"
          style={{ marginTop: 14 }}
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
        >
          Написати в Telegram
        </a>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols2">
          {TRAINERS.map((t) => {
            const img = getTrainerImage(t.image);

            return (
              <div
                key={t.id}
                className="panel soft"
                style={{
                  padding: 16,
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 92,
                    height: 92,
                    borderRadius: 18,
                    flex: "0 0 auto",
                    border: "1px solid rgba(0,0,0,.10)",
                    background: img
                      ? `url(${img}) center/cover no-repeat`
                      : "rgba(0,0,0,.05)",
                  }}
                />

                <div style={{ minWidth: 0 }}>
                  <div className="cardTitle">{t.name}</div>
                  <div className="cardMeta">{t.role}</div>

                  <p className="p" style={{ marginTop: 10 }}>
                    {t.desc}
                  </p>

                  <div className="chips" style={{ marginTop: 12 }}>
                    {t.tags.map((x) => (
                      <span key={x} className="chip">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}