import classes from "./SchoolCard.module.scss";

export interface SchoolCardProps {
  name: string,
  description: string,
  dates: string,
  imgSrc: string,
  reverse?: boolean
}

function SchoolCard({name, description, dates, imgSrc, reverse} : SchoolCardProps) {
  return (
    <div className={`${classes.SchoolCard} ${reverse && classes.reverse}`}>
      <div className={classes.left}>
        <img src={imgSrc} />
        <span>{dates}</span>
      </div>
      <div className={classes.right}>
        <span className={classes.name}>{name}</span>
        <span className={classes.description}>{description}</span>
      </div>
    </div>
  );
}

export default SchoolCard;
