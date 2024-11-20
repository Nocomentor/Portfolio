import classes from "./Navbar.module.scss";
import { Link } from "@tanstack/react-router";

interface INavbarItems {
  title: string;
  mobileTitle: string;
  href: string;
}

const navbarItems: INavbarItems[] = [
  {
    title: "O mnie",
    mobileTitle: "👤",
    href: "/",
  },
  {
    title: "Projekty",
    mobileTitle: "💾",
    href: "/projects",
  },
  {
    title: "Umiejętności",
    mobileTitle: "🛠️",
    href: "/skills",
  },
  {
    mobileTitle: "🏫",
    title: "Edukacja",
    href: "/education",
  },
  // {
  //   mobileTitle: "⛵️",
  //   title: "Żeglowanie",
  //   href: "/sailing",
  // },
];

const activeProps = {
  className: classes.active,
};

function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <ul className={classes.List}>
        {navbarItems.map((item) => (
          <li key={item.href}>
            <Link to={item.href} activeProps={activeProps}>
              <div className={classes.item}>
              <div className={classes.content}>{item.title}</div>
              <div className={classes.mobileContent}>{item.mobileTitle}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
