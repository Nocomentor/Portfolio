import React from "react";

import classes from "./SkillsCard.module.scss";

export interface SkillsCardProps {
  title: string,
  skills: {
    name: string,
    imgSrc: string
  }[]
}

function SkillsCard({title, skills } : SkillsCardProps) {
  return (
    <div className={classes.SkillsCard}>
      <div className={classes.title}>{title}</div>
      <div className={classes.options}>
        {skills.map(skill => <div className={classes.option}>
          <img src={skill.imgSrc} /> {skill.name}
        </div>)}
      </div>
    </div>
  );
}

export default SkillsCard;
