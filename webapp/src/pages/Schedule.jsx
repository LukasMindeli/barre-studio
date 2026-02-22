const SCHEDULE = [
  {
    day: "Понедельник",
    items: [
      { time: "09:00", title: "Barre (Beginner)", coach: "Анна" },
      { time: "18:30", title: "Stretching", coach: "Мария" },
    ],
  },
  {
    day: "Вторник",
    items: [
      { time: "10:00", title: "Pilates", coach: "Анна" },
      { time: "19:00", title: "Functional", coach: "Катя" },
    ],
  },
  {
    day: "Среда",
    items: [
      { time: "09:00", title: "Barre", coach: "Анна" },
      { time: "18:30", title: "Mobility", coach: "Мария" },
    ],
  },
  {
    day: "Четверг",
    items: [
      { time: "10:00", title: "Stretching", coach: "Мария" },
      { time: "19:00", title: "Pilates", coach: "Анна" },
    ],
  },
  {
    day: "Пятница",
    items: [
      { time: "09:00", title: "Functional", coach: "Катя" },
      { time: "18:30", title: "Barre (Booty)", coach: "Анна" },
    ],
  },
  {
    day: "Суббота",
    items: [
      { time: "11:00", title: "Stretching (Deep)", coach: "Мария" },
    ],
  },
  {
    day: "Воскресенье",
    items: [
      { time: "12:00", title: "Barre + Stretch", coach: "Анна/Мария" },
    ],
  },
];

export default function Schedule() {
  return (
    <div className="container" style={{ padding: "22px 0 40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 36px)" }}>Расписание</h1>
        <p className="p">Пример расписания. Потом заменим на твоё реальное.</p>
      </div>

      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
        {SCHEDULE.map((d) => (
          <div key={d.day} className="glass" style={{ padding: 14 }}>
            <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 10 }}>{d.day}</div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {d.items.map((it, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(255,255,255,.04)",
                  }}
                >
                  <div style={{ fontWeight: 900, minWidth: 62 }}>{it.time}</div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 800 }}>{it.title}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>
                      Тренер: {it.coach}
                    </div>
                  </div>

                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                      boxShadow: "0 0 18px rgba(0,229,255,.25)",
                      flex: "0 0 auto",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass" style={{ padding: 14, marginTop: 14, color: "var(--muted)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          Когда дойдём до продакшена — я сделаю формат, чтобы ты мог легко менять расписание в одном файле данных.
        </div>
      </div>
    </div>
  );
}
