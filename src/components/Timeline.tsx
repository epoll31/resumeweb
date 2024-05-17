export default function Timeline({
  items,
}: {
  items: {
    node: React.ReactNode;
    active: boolean;
  }[];
}) {
  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative border-l-2 border-zinc-500 px-4 [&:not(:last-child)]:pb-8 hover:scale-110 origin-left transition-transform"
        >
          <span
            className={`absolute top-0 left-0 w-4 h-4 rounded-full border  ${
              item.active
                ? "bg-red-300 border-red-300"
                : "bg-zinc-500 border-zinc-500"
            } translate-x-[calc(-50%-1px)] translate-y-1/2`}
          />
          {item.node}
        </div>
      ))}
    </div>
  );
}
