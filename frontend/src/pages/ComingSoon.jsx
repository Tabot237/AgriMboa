function ComingSoon({ title }) {
  return (
    <section className="container" style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1>{title}</h1>
      <p style={{ color: "var(--muted)", marginTop: "12px" }}>
        This page is being built.
      </p>
    </section>
  );
}

export default ComingSoon;