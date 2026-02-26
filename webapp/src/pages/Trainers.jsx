import { TELEGRAM_URL } from "../data/content";

const TRAINERS = [
  {
    id: "anna",
    name: "Анна",
    role: "Балет • Barre",
    desc: "Постановка техніки, постава, легкість і точність рухів. Фокус: лінії тіла, контроль і дисципліна.",
    tags: ["балет", "barre", "постава"],
  },
  {
    id: "maria",
    name: "Марія",
    role: "Stretching • Pilates",
    desc: "М’яка прогресія для гнучкості та контролю. Дихання, мобільність і безпечне укріплення корпусу.",
    tags: ["stretching", "pilates", "мобільність"],
  },
  {
    id: "katya",
    name: "Катя",
    role: "Functional",
    desc: "Функціональні тренування на все тіло: сила, координація й витривалість. Чітко, енергійно, з прогресією.",
    tags: ["functional", "сила", "енергія"],
  },
];

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
          {TRAINERS.map((t) => (
            <div key={t.id} className="panel soft" style={{ padding: 16 }}>
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
          ))}
        </div>
      </section>
    </div>
  );
}