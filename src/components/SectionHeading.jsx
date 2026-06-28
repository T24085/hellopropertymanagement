export default function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
