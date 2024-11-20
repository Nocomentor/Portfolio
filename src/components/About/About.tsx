import classes from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ISocial {
  name: string;
  FAIcon: IconDefinition;
  isLink: boolean;
  link?: string;
}

const socials: ISocial[] = [
  {
    name: "kontakt@krzysztof-ostrowski.pl",
    FAIcon: faEnvelope,
    isLink: true,
    link: "mailto:kontakt@krzysztof-ostrowski.pl",
  },
  {
    name: "0krzys",
    FAIcon: faDiscord,
    isLink: false,
  },
  {
    name: "Nocomentor",
    FAIcon: faInstagram,
    isLink: true,
    link: "https://www.instagram.com/nocomentor/",
  },

  {
    name: "Crystal Rejsy",
    FAIcon: faInstagram,
    isLink: true,
    link: "https://www.instagram.com/crystalrejsy/",
  },
];

function About() {
  return (
    <div className={classes.About}>
      <div className={classes.titleBarContainer}>
        <img src="media/krzys.png" alt="photo of me" />
        <div className={classes.titleBar}>
          <div className={classes.name}>Krzysztof Ostrowski</div>
          <div className={classes.description}>
            Jestem studentem trzeciego roku informatyki. Cenię sobie
            profesjonalizm oraz satysfakcję z zastosowanych rozwiązań.
          </div>
        </div>
      </div>
      <div className={classes.socials}>
        {socials.map((social) => {
          if (social.isLink) {
            return (
              <a key={social.name} href={social.link} target="_blank">
                <div className={classes.social}>
                  <FontAwesomeIcon icon={social.FAIcon} /> {social.name}
                </div>
              </a>
            );
          } else {
            return (
              <div key={social.name} className={classes.social}>
                <FontAwesomeIcon icon={social.FAIcon} /> {social.name}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default About;
