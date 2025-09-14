import { DropMenu } from "../components/DropMenu";

export function Main() {
  return (
    <div className="flex flex-col gap-7">
      <header className="flex m-5 justify-between items-center text-sm">
        <img className="w-15" src="/logo.svg" alt="logo" />
        {/* <nav>
          <ul className="flex gap-14 text-xl text-white">
          <li>
          <a href="">Home</a>
          </li>
          <li>
          <a href="Projects">Projects</a>
          </li>
          <li>
          <a href="About">About</a>
          </li>
          <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
          </nav> */}
        <div className="flex items-center gap-4">
          <img className="w-7" src="/mon.svg" alt="mon" />
          <DropMenu />
        </div>
      </header>
      <main>
        <section className="flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-lg font-light">Hey, i am Rewelli Oliveira</h2>
            <h1 className="text-2xl">Full-Stack Development</h1>
          </div>
          <button className="flex justify-center items-center gap-12 px-5 py-3 border border-[#E06AFF] rounded-3xl hover:cursor-pointer hover:bg-[#E06AFF] transition-colors duration-300">
            <p className="text-sm">See more</p>
            <img src="/arrow.svg" alt="" />
          </button>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
