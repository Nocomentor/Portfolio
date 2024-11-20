import classes from "./Navbar.module.scss";
import { Link } from "@tanstack/react-router";

interface INavbarItems {
  title: string;
  href: string;
}

const navbarItems: INavbarItems[] = [
  {
    title: "O mnie",
    href: "/",
  },
  {
    title: "Projekty",
    href: "/projects",
  },
  {
    title: "Umiejętności",
    href: "/skills",
  },
  {
    title: "Edukacja",
    href: "/education",
  },
  {
    title: "Żeglowanie",
    href: "/sailing",
  },
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
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
