import { Link } from "react-router-dom";

export default function PricingSection({ compact = false }) {
  const plans = [
    {
      name: "Разовое занятие",
      price: "350 ₴",
      note: "Подходит, чтобы попробовать формат.",
      perks: ["1 тренировка", "любое направление", "запись через контакты"],
      popular: false,
    },
    {
      name: "Абонемент 8 занятий",
      price: "2400 ₴",
      note: "Самый популярный вариант.",
      perks: ["8 тренировок", "срок 1 месяц", "любые направления"],
      popular: true,
    },
    {
      name: "Абонемент 12 занятий",
      price: "3300 ₴",
      note: "Для тех, кто хочет быстрый прогресс.",
      perks: ["12 тренировок", "срок 1 месяц", "лучше всего для результата"],
      popular: false,
    },
    {
      name: "Безлимит 1 месяц",
      price: "4200 ₴",
      note: "Максимум свободы и дисциплины.",
      perks: ["неограниченно", "срок 1 месяц", "для сильной мотивации"],
      popular: false,
    },
  ];

  return (
    <section style={{ marginTop: compact ? 14 : 18 }}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <h2 className="h2" style={{ margin: 0 }}>
          Абонементы и цены
        </h2>
        <div className="smallMuted">Запись — через контакты</div>
      </div>

      <div className={"grid " + (compact ? "cols-2" : "cols-3")} style={{ marginTop: 12 }}>
        {plans.map((p) => (
          <div key={p.name} className={"glass priceCard " + (p.popular ? "popular" : "")} style={{ padding: 16 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <div className="planName">{p.name}</div>
              {p.popular && <span className="planBadge">популярный</span>}
            </div>

            <div className="planPrice" style={{ marginTop: 8 }}>
              {p.price}
            </div>

            <div className="smallMuted" style={{ marginTop: 6 }}>
              {p.note}
            </div>

            <ul className="planList" style={{ marginTop: 10 }}>
              {p.perks.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <Link to="/contacts" className="btnLink" style={{ marginTop: 12 }}>
              Записаться
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}