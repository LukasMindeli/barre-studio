import { PORTFOLIO } from "../data/content";

function getImg(file) {
  try {
    return new URL(`../assets/services/${file}`, import.meta.url).href;
  } catch {
    return null;
  }
}

export default function Portfolio() {
  return (
    <div className="container">
      <section className="panel" style={{ padding: 18 }}>
        <h1 className="h1" style={{ fontSize: "clamp(24px, 4vw, 40px)" }}>Портфоліо</h1>
        <p className="p" style={{ marginTop: 10 }}>
          Прев’ю робіт/фото. Можемо замінити картки на ваші реальні матеріали: фото студії, занять, подій.
        </p>
      </section>

      <section style={{ marginTop: 16 }}>
        <div className="grid cols3">
          {PORTFOLIO.map((p) => {
            const img = getImg(p.image);
            return (
              <div key={p.id} className="panel soft" style={{ padding: 0, overflow: "hidden" }}>
                <div
                  style={{
                    height: 170,
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
    </div>
  );
}