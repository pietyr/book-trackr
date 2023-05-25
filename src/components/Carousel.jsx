export default function Latest() {
  return (
    <section className="latest">
      <Card name={1} />
      <Card name={2} />
      <Card name={3} />
    </section>
  );
}

function Card({ name }) {
  return (
    <section className="latest__card">
      <h2>{name}</h2>
    </section>
  );
}
