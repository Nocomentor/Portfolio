import classes from "./Projects.module.scss";

interface IProject {
  title: string;
  dates: string;
  description: string;
  imgSrc: string;
  techs: string[];
  github?: string;
  liveView?: string;
}

const projects: IProject[] = [
  {
    title: "EZMATMA",
    dates: "2022 – OBECNIE",
    description:
      "Projekt polega na stworzeniu platformy do odtwarzania filmów, wyświetlania notatek i śledzenia postępu użytkowników na podstawie rozwiązanych list zadań, z funkcją automatycznego i manualnego sprawdzania oraz integracją z płatnościami internetowymi. W 2022 roku, we współpracy z matematykiem, stworzyłem aplikację i obsługiwałem projekt technicznie. Obecnie współpracuję z grafikiem i programistą, którym przekazuję swoją wiedzę, a z aplikacji skorzystało już ponad 1000 użytkowników.",
    imgSrc: "media/projects/ezmatma.svg",
    techs: ["php", "js", "css", "html", "mysql"],
    liveView: "https://ezmatma.pl",
  },
  {
    title: "BitElse",
    dates: "09.2024 - ??.????",
    description:
      "Razem z przyjacielem rozpoczynamy projekt, którego celem jest tworzenie aplikacji internetowych dla klientów",
    imgSrc: "media/projects/logo.png",
    techs: ["cs", "react", "github", "dotnet"],
  },
  {
    title: "Plan zajęć",
    dates: "11.2024",
    description:
      "Chcąc poznać język Swift stworzyłem swoją pierwszą aplikację na ios, która pomaga mi zapamiętać mój plan zajęć",
    imgSrc: "media/projects/timetable.PNG",
    techs: ["swift"],
    github: "https://github.com/Nocomentor/TimetableManager",
  },
  {
    title: "FAJRANT INATOR",
    dates: "01.2024",
    description:
      "W ramach przedmiotu na studia, w trzyosobowym zespole stworzyliśmy prosty sklep internetowy. Obsługuje on integracje z bazą danych, zakup produktu, dodawanie oraz usuwanie przedmiotów, zarządzanie użytkownikami oraz weryfikację sprzedającego.",
    imgSrc: "media/projects/fi.png",
    techs: ["js", "css", "html", "mongodb"],
    github: "https://github.com/PatrykFlama/FajrantInator.pl",
  },
  {
    title: "DOMOWY SERWER",
    dates: "12.2023 - OBECNIE",
    description:
      "Jestem fanem rozwiązań, które sprawiają, że mój dom jest \"smart\". Tak właśnie małymi krokami powstaje mój własny domowy serwer, który na ten moment obsługuje żarówkami, zasłonami i muzyką. W przyszłości chciałbym zautomatyzować dobór temperatury i stworzyć ładny wyświetlacz z wszystkimi danymi technicznymi domu, oraz innymi przydatnymi informacjami. Dodatkowo hostuję na nim swoje projekty, takie jak dysk i komunikator do współpracy ze znajomymi.",
    imgSrc: "media/projects/serwer.png",
    techs: ["bash", "docker", "linux"],
  },
  {
    title: "... TO PORTFOLIO!",
    dates: "04.2024",
    description:
      "Tak właściwie, to portfolio, które właśnie oglądasz, jest jedym z zadań, które wykonałem w ramach listy zadań na przedmiot poświęcony ractowi. Czasami tutaj zaglądam, żeby poprawić lekko kod i zaaaktualizować dane.",
    imgSrc: "media/projects/cv.png",
    techs: ["react", "ts", "scss", "vite"],
  },
  
];

function Projects() {
  return (
    <div className={classes.Projects}>
      {projects.map((project) => (
        <div className={classes.project}>
          <div className={classes.left}>
            {project.dates}
            <div className={classes.spacer}></div>
            <img src={project.imgSrc} className={classes.projectImg} />
            <div className={classes.spacer}> </div>
            <div className={classes.techs}>
              {project.techs.map((tech) => (
                <div className={classes.techContainer}>
                <div className={classes.tooltip}>{tech} </div>
                <img src={`https://skillicons.dev/icons?i=${tech}`} />
                </div>
              ))}
            </div>
          </div>

          <div className={classes.right}>
            <div className={classes.details}>
              <span className={classes.title}>{project.title}</span>
              <span className={classes.description}>{project.description}</span>
            </div>
            <div className={classes.links}>
              {project.github !== undefined ? (
                <a href={project.github} target="_blank">
                  <span className={classes.link}>Github</span>
                </a>
              ) : (
                ``
              )}
              {project.liveView !== undefined ? (
                <a href={project.liveView} target="_blank">
                  <span className={classes.link}>Live View</span>
                </a>
              ) : (
                ``
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
