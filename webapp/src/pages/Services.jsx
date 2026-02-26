import { TELEGRAM_URL, SERVICES } from "../data/content";

function getServiceImage(file) {
  try {
    return new URL(`../assets/services/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

export default function Services() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Послуги</h1>
        <p className="p" style={{ marginTop: 10 }}>
          Оберіть напрям — і напишіть у Telegram, щоб узгодити час та формат.
        </p>

        <a className="btn btnPrimary" style={{ marginTop: 14 }} href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          Написати в Telegram
        </a>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols2">
          {SERVICES.map((s) => {
            const img = getServiceImage(s.image);
            return (
              <div key={s.id} className="panel soft" style={{ padding: 0, overflow: "hidden" }}>
                <div
                  style={{
                    height: 170,
                    background: img ? `url(${img}) center/cover no-repeat` : "rgba(0,0,0,.03)",
                    borderBottom: "1px solid rgba(0,0,0,.08)",
                  }}
                />
                <div style={{ padding: 16 }}>
                  <div className="cardTitle">{s.title}</div>
                  <div className="cardMeta">{s.desc}</div>

                  <div className="chips" style={{ marginTop: 10 }}>
                    {s.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
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