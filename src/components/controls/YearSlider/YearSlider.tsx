
import { useState } from "react";
import classes from "./YearSlider.module.scss"

import  boatImg from "./media/boat.png";

export interface IYearSlider {
  years: string[];
}

function countTimeSpanMargin(start: string, end: string): number {
  let months = 0;

  let startYear = start;
  let startMonth = "6";
  let endYear = end;
  let endMonth = "6";
  
  if(start.includes("-")) {
    [startMonth, startYear] = start.split("-");
  } 

  if(end.includes("-")) {
    [endMonth, endYear] = end.split("-");
  } 

  months = ((parseInt(endYear) - parseInt(startYear)) * 12) + parseInt(endMonth) - parseInt(startMonth);
  return months;
  
}

function YearSlider({years}: IYearSlider) {

  const [selected, setSelected] = useState<number>(0);
  const [boatX, setBoatX] = useState<number>(0);
  const [boatRotate, setBoatRotate] = useState<boolean>(false);

  function moveBoat(clicked: any) {
    // console.log(clicked.target.offsetLeft);
    let target = clicked.target.offsetLeft
    if(target < boatX) {
      setBoatRotate(true);
    } else {
      setBoatRotate(false);
    }
    setBoatX(target);
  }

  return(
    <div className={classes.YearSlider}>
      <img 
        src={boatImg} 
        alt="boat" 
        className={`${classes.boat} ${boatRotate ? classes.rotated : ""}`}
        style={{
          left: `${boatX - 30}px`,
          transform: `${boatRotate}`,
        }}
      />
      <div className={classes.trail}></div>

        {years.map((year, index) => {

          let style = {}

          if(index > 0) {
            style = 
            {
              marginLeft: `${countTimeSpanMargin(years[index-1], year) * 3}px`
            }
          }

          return (
          <div 
            key={index} 
            className={`${classes.year} ${selected === index ? classes.selected : ""}`} 
            style={style}
            onClick={(event) => {
              setSelected(index)
              moveBoat(event)
            }}
            >
            {year}
          </div>
        )
      })}
      </div>
  )
}

export default YearSlider

