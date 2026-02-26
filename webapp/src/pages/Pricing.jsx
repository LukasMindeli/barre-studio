import { TELEGRAM_URL, PRICING } from "../data/content";

export default function Pricing() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Ціни</h1>
        <p className="p" style={{ marginTop: 10 }}>
          Тут — пакети у вигляді карток. Точну ціну підтвердимо в Telegram (щоб не писати “вигадані цифри”).
        </p>

        <a className="btn btnPrimary" style={{ marginTop: 14 }} href={TELEGRAM_URL} target="_blank" rel="noreferrer">
          Написати в Telegram
        </a>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols2">
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

              <div style={{ marginTop: 8, fontSize: 20, fontWeight: 700 }}>
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
    </div>
  );
}