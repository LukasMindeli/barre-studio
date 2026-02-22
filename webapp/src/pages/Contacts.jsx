export default function Contacts() {
  return (
    <div className="container" style={{ padding: "22px 0 40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Контакты</h1>
        <p className="p">Свяжись с нами — ответим и подберём занятие.</p>
      </div>

      <div className="grid cols-2" style={{ marginTop: 14 }}>
        <div className="glass" style={{ padding: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 10 }}>Barre Studio</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, color: "var(--muted)" }}>
            <div><b style={{ color: "var(--text)" }}>Тел:</b> +38 (0XX) XXX-XX-XX</div>
            <div><b style={{ color: "var(--text)" }}>Адрес:</b> Укажешь позже</div>
            <div><b style={{ color: "var(--text)" }}>Instagram:</b> @barrestudio</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <a className="btn" href="tel:+380000000000" style={{ textDecoration: "none" }}>
              Позвонить
            </a>
            <a className="btn" href="https://instagram.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
              Instagram
            </a>
          </div>
        </div>

        <div className="glass" style={{ padding: 16 }}>
          <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 10 }}>Как добраться</div>
          <p className="p">
            Добавим ссылку на Google Maps и точный адрес. Пока это заглушка.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <a
              className="btn"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Открыть карту
            </a>
            <a
              className="btn"
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
