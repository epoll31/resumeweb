export default function MegaText({ children }: { children: string }) {
  return (
    <div className="bg-clip-text bg-theme-wordmark-text inline-flex">
      <h1
        className=" text-transparent font-barlow font-bold pointer-events-none select-none align-text-bottom"
        style={{
          WebkitTextStroke: "1px var(--theme-wordmark-border)",
          fontSize: "min(30vw, 375px)",
          lineHeight: "1",
        }}
      >
        {children}
      </h1>
    </div>
  );
}
