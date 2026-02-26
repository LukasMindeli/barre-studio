import { TELEGRAM_URL, EMAIL } from "../data/content";

export default function Contacts() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Контакти</h1>
        <p className="p" style={{ marginTop: 10 }}>
          Найшвидше — Telegram. Також можна написати на email.
        </p>

        <div className="grid cols2" style={{ marginTop: 14 }}>
          <a className="btn btnPrimary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
            Написати в Telegram
          </a>
          <a className="btn" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>
    </div>
  );
}