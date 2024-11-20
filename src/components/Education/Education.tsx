
import classes from "./Education.module.scss";
import SchoolCard, { SchoolCardProps } from "../cards/SchoolCard/SchoolCard";

const ii: SchoolCardProps = {
  name: "Uniwersytet Wrocławski",
  description: "Kierunek: informatyka",
  dates: "06.10.2022 - obecnie",
  imgSrc: "media/schools/ii.png",
};

const xiv: SchoolCardProps = {
  name: "Liceum Ogólnokształcące nr XIV im. Polonii Belgijskiej",
  description: "Rozszerzone przedmioty: informatyka, matematyka, fizyka",
  dates: "01.09.2019 - 30.04.2022",
  imgSrc: "media/schools/loxiv.png",
  reverse: true,
};

function Education() {
  return (
    <div className={classes.Education}>
      <SchoolCard
        key={ii.name}
        name={ii.name}
        description={ii.description}
        dates={ii.dates}
        imgSrc={ii.imgSrc}
        reverse={ii.reverse}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.3 -0.3 340.6 160.6"
        className={classes.arrowBox}
      >
        <path
          d=" M 9 13 C 9 60 60 80 100 80 L 220 80 C 260 80 340 100 340 160"
          className={classes.arrow}
        />
        <polyline
          className={classes.arrowEnd}
          points="0,18 9,0 18,18 9,13"
        ></polyline>
      </svg>

      <SchoolCard
        key={xiv.name}
        name={xiv.name}
        description={xiv.description}
        dates={xiv.dates}
        imgSrc={xiv.imgSrc}
        reverse={xiv.reverse}
      />
    </div>
  );
}

export default Education;
