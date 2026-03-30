export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "900px", margin: "0 auto", lineHeight: 1.6 }}>
      <section style={{ marginBottom: "48px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>Nan Lab</h1>
        <p style={{ fontSize: "18px", marginBottom: "12px" }}>
          Welcome to the Nan Lab at Tsinghua University.
        </p>
        <p>
          Our research focuses on spintronics, magnetoelectric devices, MEMS, and beyond-CMOS systems for future information technologies.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Research Areas</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Spintronics and magnetic materials</li>
          <li>Magnetoelectric and acoustic wave devices</li>
          <li>MEMS and PMUT systems</li>
          <li>Beyond-CMOS memories and logic</li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Selected Highlights</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>Advanced research on SOT-MRAM and logic-in-memory devices</li>
          <li>PMUT arrays for real-time 3D ultrasound imaging</li>
          <li>Magnetoelectric and acoustic platforms for sensing and communications</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Contact</h2>
        <p>School of Integrated Circuits, Tsinghua University</p>
        <p>Email: your-email@tsinghua.edu.cn</p>
      </section>
    </main>
  );
}