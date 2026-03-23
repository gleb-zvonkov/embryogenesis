import type { ReactNode } from "react";

type Section = {
  heading: string;
  items: ReactNode[];
};

type Props = {
  title: string;
  sections: Section[];
  image: string;
};

function WeekSection({ title, sections, image }: Props) {
  return (
    <section style={{ height: "100vh", overflowY: "auto" }}>
      <div
        style={{
          minHeight: "85%", // 👈 key for centering
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // centers title + content block
          padding: "0px 60px",
        }}
      >
        <h3>{title}</h3>

        <div
          style={{
            display: "flex",
            alignItems: "center", // 👈 vertical centering (like DaySection)
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ width: "55%", maxWidth: "800px" }}>
            {sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "30px" }}>
                <h4>{section.heading}</h4>

                <ul
                  style={{
                    paddingLeft: "20px",
                    margin: 0,
                    listStyleType: "none",
                  }}
                >
                  {section.items.map((item, j) => (
                    <li key={j} className="weekText">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
      </div>
    </section>
  );
}

export default WeekSection;