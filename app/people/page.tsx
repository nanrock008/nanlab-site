export default function PeoplePage() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "0 auto", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "36px", marginBottom: "24px" }}>People</h1>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Principal Investigator</h2>
        <p>Tianxiang Nan</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Students</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Student A</li>
          <li>Student B</li>
          <li>Student C</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>Alumni</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Alumnus A</li>
          <li>Alumnus B</li>
        </ul>
      </section>
    </main>
  );
}