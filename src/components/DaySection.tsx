import type { ReactNode } from "react";

type Props = {
  title: string;
  text: ReactNode[]; // 🔥 change here
  image: string;
};

function DaySection({ title, text, image }: Props) {
  return (
    <section style={{ height: "100vh", overflowY: "auto" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px 60px",
          minHeight: "80%",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ maxWidth: "800px", width: "50%", textAlign: "left" }}>
          <h2>{title}</h2>

          {text.map((t, i) => (
            <p key={i} className="dayText">
              {t}
            </p>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={image}
          alt={title}
          style={{
            paddingTop: "50px",
            width: "40%",
            maxWidth: "700px",
          }}
        />
      </div>
    </section>
  );
}

export default DaySection;
