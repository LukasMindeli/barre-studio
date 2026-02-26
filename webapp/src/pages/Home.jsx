import { Link } from "react-router-dom";
import {
  TELEGRAM_URL,
  EMAIL,
  SERVICES,
  HOW_WE_WORK,
  PRICING,
  PORTFOLIO,
  FAQ,
} from "../data/content";

function getImg(file) {
  try {
    return new URL(`../assets/services/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1">Barre Studio</h1>
        <p className="p" style={{ marginTop: 10, maxWidth: 820 }}>
          Тренування для тонусу, постави та гнучкості. Без гучних обіцянок —
          просто зрозумілий формат і акуратна робота з технікою.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <a className="btn btnPrimary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Написати в Telegram
          </a>
          <Link className="btn" to="/services">Переглянути послуги</Link>
          <Link className="btn" to="/pricing">Ціни</Link>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
          <h2 className="h2">Послуги</h2>
          <Link to="/services" className="btn" style={{ padding: "10px 12px" }}>Усі →</Link>
        </div>

        <div className="grid cols2" style={{ marginTop: 12 }}>
          {SERVICES.map((s) => {
            const img = getImg(s.image);
            return (
              <div key={s.id} className="panel soft" style={{ padding: 0, overflow: "hidden" }}>
                <div
                  style={{
                    height: 160,
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

      {/* HOW WE WORK */}
      <section style={{ marginTop: 16 }}>
        <h2 className="h2">Як ми працюємо</h2>

        <div className="grid cols2" style={{ marginTop: 12 }}>
          {HOW_WE_WORK.map((s, idx) => (
            <div key={idx} className="panel soft" style={{ padding: 16 }}>
              <div className="cardTitle">{idx + 1}. {s.title}</div>
              <p className="p" style={{ marginTop: 8 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
          <h2 className="h2">Ціни</h2>
          <Link to="/pricing" className="btn" style={{ padding: "10px 12px" }}>Детальніше →</Link>
        </div>

        <div className="grid cols2" style={{ marginTop: 12 }}>
          {PRICING.map((p) => (
            <div
              key={p.id}
              className="panel soft"
              style={{
                padding: 16,
                border: p.popular ? "2px solid rgba(0,0,0,.16)" : "1px solid rgba(255,255,255,.26)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div className="cardTitle">{p.title}</div>
                {p.popular && <span className="chip">популярний</span>}
              </div>

              <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>
                {p.price}
              </div>

              <p className="p" style={{ marginTop: 8 }}>{p.note}</p>

              <div className="chips" style={{ marginTop: 10 }}>
                {p.features.map((f) => (
                  <span key={f} className="chip">{f}</span>
                ))}
              </div>

              <a className="btn btnPrimary" style={{ marginTop: 12 }} href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                Записатися
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section style={{ marginTop: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
          <h2 className="h2">Портфоліо</h2>
          <Link to="/portfolio" className="btn" style={{ padding: "10px 12px" }}>Усі →</Link>
        </div>

        <div className="grid cols3" style={{ marginTop: 12 }}>
          {PORTFOLIO.map((p) => {
            const img = getImg(p.image);
            return (
              <div key={p.id} className="panel soft" style={{ padding: 0, overflow: "hidden" }}>
                <div
                  style={{
                    height: 150,
                    background: img ? `url(${img}) center/cover no-repeat` : "rgba(0,0,0,.03)",
                    borderBottom: "1px solid rgba(0,0,0,.08)",
                  }}
                />
                <div style={{ padding: 16 }}>
                  <div className="cardTitle">{p.title}</div>
                  <div className="cardMeta">{p.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginTop: 16 }}>
        <h2 className="h2">FAQ</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
          {FAQ.map((x) => (
            <details key={x.q} className="faqItem">
              <summary>{x.q}</summary>
              <div className="faqAnswer">{x.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section style={{ marginTop: 16 }}>
        <h2 className="h2">Контакти</h2>

        <div className="panel soft" style={{ padding: 16, marginTop: 12 }}>
          <div className="grid cols2">
            <a className="btn btnPrimary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="btn" href={`mailto:${EMAIL}`}>
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}