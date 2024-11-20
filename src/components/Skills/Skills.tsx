import React from "react";

import classes from "./Skills.module.scss";
import SkillsCard, { SkillsCardProps } from "../cards/SkillsCard/SkillsCard";

const SkillCards : SkillsCardProps[] = [
  {
    title: "JĘZYKI PROGRAMOWANIA",
    skills: [
      {
        imgSrc: "https://skillicons.dev/icons?i=php",
        name: "PHP"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=cs",
        name: "C#"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=cpp",
        name: "C++"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=js",
        name: "JavaScript"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=ts",
        name: "TypeScript"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=py",
        name: "Python"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=html",
        name: "HTML"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=css",
        name: "CSS"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=scss",
        name: "SCSS"
      },
    ]
  },
  {
    title: "TECHNOLOGIE",
    skills: [
      {
        imgSrc: "https://skillicons.dev/icons?i=php",
        name: "PHP"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=docker",
        name: "Docker"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=dotnet",
        name: ".NET"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=latex",
        name: "Latex"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=md",
        name: "Markdown"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=nodejs",
        name: "NodeJS"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=npm",
        name: "NPM"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=react",
        name: "React"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=vite",
        name: "Vite"
      },
    ]
  },
  {
    title: "PROGRAMY",
    skills: [
      {
        imgSrc: "https://skillicons.dev/icons?i=clion",
        name: "CLion"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=phpstorm",
        name: "PHPStorm"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=unity",
        name: "Unity"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=visualstudio",
        name: "Visual Studio"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=vscode",
        name: "VSC"
      },
      {
        imgSrc: "https://skillicons.dev/icons?i=windows",
        name: "MS Office"
      },
    ]
  }
]

function Skills() {
  return (
    <div className={classes.Skills}>
      {SkillCards.map(card => <SkillsCard title={card.title} skills={card.skills}/>)}
      
    </div>
  );
}

export default Skills;
