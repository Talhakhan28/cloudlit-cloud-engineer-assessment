export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        margin: 0,
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "50px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          width: "700px",
          backdropFilter: "blur(8px)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "10px",
            color: "#38bdf8",
          }}
        >
           Cloud Engineer Intern Assessment
        </h1>

        <h2
          style={{
            fontWeight: "normal",
            marginBottom: "30px",
            color: "#e2e8f0",
          }}
        >
          Muhammad Talha Khan
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          A simple Next.js application prepared for the CloudLit Cloud
          Engineer Internship Assessment.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          {["Next.js", "Docker", "Docker Compose", "Jenkins"].map((tech) => (
            <span
              key={tech}
              style={{
                padding: "10px 18px",
                background: "#2563eb",
                borderRadius: "25px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <button
            style={{
              padding: "12px 28px",
              background: "#38bdf8",
              color: "#0f172a",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Next.js
          </button>

          <button
            style={{
              padding: "12px 28px",
              background: "transparent",
              color: "white",
              border: "2px solid #38bdf8",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            CloudLit Assessment
          </button>
        </div>

        <hr
          style={{
            margin: "40px 0 20px",
            borderColor: "#334155",
          }}
        />

        <p
          style={{
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Prepared for CloudLit • Cloud Engineer Internship 2026
        </p>
      </div>
    </main>
  );
}