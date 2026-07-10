import { Reveal } from "./Reveal";

export function Faq({ items, eyebrow = "Answers", index = "05", title }) {
  return (
    <section className="faq" id="faq">
      <div className="section-head">
        <span className="index">{index}</span>
        <p className="micro">{eyebrow}</p>
      </div>
      {title && <h2 className="display faq__title">{title}</h2>}
      <Reveal className="faq__list" stagger={0.06} y={24}>
        {items.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary className="faq__q">
              <span>{item.q}</span>
              <span className="faq__mark" aria-hidden="true" />
            </summary>
            <p className="faq__a">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
