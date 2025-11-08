import YearSlider from "../controls/YearSlider/YearSlider";
import classes from "./Sailiing.module.scss";

import water from "./media/water.jpg";

interface ISailCard {
  name: string;
  image: string;
  description: string;
  year: string;
}

let sailCards: ISailCard[] = [
  {
    name: "Żeglowanie z tatą",
    image: "",
    description:
      "Moja przygoda z żeglowaniem zaczeła się, kiedy tata pierwszy raz wziął mnie na łódkę.",
    year: "2015",
  },
  {
    name: "Własna karta pirata",
    image: "",
    description:
      "Żeglowanie tak bardzo mnie pochłonęło, że postanowiłem nauczyć się samemu prowadzić łódkę i zdać egzamin na patent żęglarza jachowego.",
    year: "2019",
  },
  {
    name: "Pierwszy rejs",
    image: "",
    description:
      "Razem z znajomymi postanowiliśmy poczuć, jak to jest samodzielnie przeprowadzić rejs.",
    year: "2021",
  },
  {
    name: "Pierwszy obóz żeglarski",
    image: "",
    description:
      "Okazało się, że moją misją jest przekazywanie wiedzy o żeglowaniu innym. Zacząłem od pracy jako wychowawca na obozie żeglarskim.",
    year: "2022",
  },
  {
    name: "Pierwsze uprawnienia instruktorskie",
    image: "",
    description:
      "Chcąć zdobyć więcej wiedzy i umiejętności, zdecydowałem się na kurs na instruktora żeglowania PZŻ.",
    year: "05-2023",
  },
  {
    name: "Pierwsze szkolenie",
    image: "",
    description:
      "Pierwszy kurs, na którym uczyłem, odbył się na obozie dla dzieci.",
    year: "07-2023",
  },
  {
    name: "Własny duży rejs",
    image: "",
    description:
      "Moja droga żeglarska zaczęła przyspieszać tempa. Coraz więcej znajomych pozwoliło mi zarazić się pasją do żeglowania.",
    year: "09-2023",
  },
  {
    name: "Własna szkoła żeglowania",
    image: "",
    description:
      "Marzenia stały się faktem. Razem z Martą stworzyłem szkołę żeglowania, która pomogła moim najbliższym znajomym zdać egzamin na patent żeglarza jachowego.",
    year: "2024",
  },
];

let years: string[] = sailCards.map((card) => card.year);

function Sailiing() {
  return (
    <div className={classes.Sailiing}>

      
      <div className={classes.slider}>
        <YearSlider years={years} />
      </div>
      <img src={water} alt="water" className={classes.water} />
    </div>
  );
}

export default Sailiing;
