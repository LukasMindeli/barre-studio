export default function Portfolio() {
  const items = [
    { title: "Проєкт 1", desc: "Додамо ваші реальні матеріали (фото/відео/історії) після отримання." },
    { title: "Проєкт 2", desc: "Оформимо в такому ж балетному стилі: м’яко, чисто, читабельно." },
    { title: "Проєкт 3", desc: "Можна показати студію, процес, події або результати." },
  ];

  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Портфоліо</h1>
        <p className="p" style={{ marginTop: 10 }}>
          Цей розділ заповнюється вашими реальними матеріалами. Зараз — акуратні картки-заглушки.
        </p>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols3">
          {items.map((x) => (
            <div key={x.title} className="panel soft" style={{ padding: 16 }}>
              <div className="cardTitle">{x.title}</div>
              <div className="cardMeta">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}