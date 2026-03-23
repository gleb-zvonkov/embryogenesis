type TermProps = {
  children: React.ReactNode;
  definition: string;
  setTooltip: React.Dispatch<
    React.SetStateAction<{
      text: string;
      x: number;
      y: number;
      visible: boolean;
    }>
  >;
};

function Term({ children, definition, setTooltip }: TermProps) {
  return (
    <b
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        let x = rect.left + rect.width / 2;

        const padding = 16;
        const tooltipWidth = 220; // slightly bigger estimate

        // 👇 clamp CENTER based on half width
        x = Math.max(
          padding + tooltipWidth / 2,
          Math.min(window.innerWidth - padding - tooltipWidth / 2, x),
        );

        setTooltip({
          text: definition,
          x,
          y: rect.bottom + 10,
          visible: true,
        });
      }}
      onMouseLeave={() => {
        setTooltip((t) => ({ ...t, visible: false }));
      }}
          
      onClick={() => {
        const query = `${children} embryology`;
        const url = `https://www.google.com/search?q=${encodeURIComponent(
          query as string,
        )}`;

        window.open(url, "_blank");
      }}
    >
      {children}
    </b>
  );
}

export default Term;