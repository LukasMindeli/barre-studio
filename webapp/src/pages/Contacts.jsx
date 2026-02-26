import { TELEGRAM_URL, EMAIL } from "../data/content";

export default function Contacts() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(26px, 4.2vw, 44px)" }}>
          Контакти
        </h1>

        <p className="p" style={{ marginTop: 10, maxWidth: 860 }}>
          Найшвидший спосіб запису — Telegram. Також можна написати на email.
        </p>

        <div className="grid cols2" style={{ marginTop: 16 }}>
          <a
            className="btn btnPrimary"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Написати в Telegram
          </a>

          <a className="btn" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
      </section>

      {/* Small clickable cards (optional but looks "site-like") */}
      <section style={{ marginTop: 16 }}>
        <div className="grid cols2">
          <a
            className="panel soft"
            href={TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            style={{ padding: 16, textDecoration: "none" }}
          >
            <div className="cardTitle">Telegram</div>
            <div className="cardMeta" style={{ marginTop: 8 }}>
              Запис, питання, уточнення розкладу та абонементів.
            </div>
          </a>

          <a
            className="panel soft"
            href={`mailto:${EMAIL}`}
            style={{ padding: 16, textDecoration: "none" }}
          >
            <div className="cardTitle">Email</div>
            <div className="cardMeta" style={{ marginTop: 8 }}>
              Для довших повідомлень або співпраці.
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}