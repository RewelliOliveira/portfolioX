export function Projects() {
  const stacks = ["TypeScript", "Node.js", "Tailwind", "React"];
  return (
    <div className="flex flex-col gap-3 font-light text-sm w-4/5">
      <div className="w-full h-52">
        <img
          src="/teste1.svg"
          alt="Projeto Sallon Ayr"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <p>
        Sallon Ayr is a modern platform designed to streamline beauty salon
        management, from client scheduling to service organization.
      </p>

      <span className="font-medium text-lg">Sallon Ayr</span>
      <div className="flex flex-wrap gap-4 mt-2">
        {stacks.map((lang, index) => (
          <div
            className="border border-[#E06AFF] rounded-md px-2 py-1 text-xs"
            key={index}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
}
