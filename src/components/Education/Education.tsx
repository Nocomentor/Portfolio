
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.3 -0.3 70 180.6"
        className={classes.mobileArrowBox}
      >
        <path
          d="M 36 15 L 36 105 C 36 105 36 123 18 123 C 0 123 0 105 0 105 C 0 99.0006 0 87 18 87 C 36 87 72 87 54 123 C 36 141 36 141 36 159 L 36 178"
          className={classes.mobileArrow}
        />
        <polyline
          className={classes.mobileArrowEnd}
          points="27,18 36,0 45,18 36,13"
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
