import { Projects } from "../components/projects";
import { DropMenu } from "../components/UI/dropMenu";

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
      <main className="flex flex-col gap-10">
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
        <section className="flex flex-col gap-7 px-5 items-center">
          <Projects />
        </section>
        <section className="flex flex-col gap-7 px-5 items-center">
          <h1>About</h1>
          <div className="flex flex-col gap-8 items-center">
            <img src="/me.svg" alt="profile picture" />
            <p className="text-sm font-normal text-justify">
              Sou estudante de Engenharia de Software na Universidade Federal do
              Ceará (UFC) e desenvolvedor front-end apaixonado por criar
              interfaces intuitivas e funcionais. Minha jornada na programação
              começou aos 15 anos, em uma escola profissionalizante, e desde
              então venho me especializando em tecnologias como React,
              TypeScript, Vite e CSS Modules. Durante a faculdade, participei de
              projetos relevantes, como o desenvolvimento de um aplicativo de
              gestão financeira e de um sistema de pedidos online para
              restaurantes, experiências que reforçaram minha dedicação,
              organização e proatividade. Busco sempre aprender e evoluir, com o
              objetivo de contribuir em equipes de desenvolvimento entregando
              soluções de qualidade e impacto.
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
