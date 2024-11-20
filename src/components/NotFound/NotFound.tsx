
import classes from "./NotFound.module.scss"
import { Link } from "@tanstack/react-router"

function NotFound() {

  return(
    <div className={classes.NotFound}>
      <span className={classes.error}>no i 404...</span>
      <img src="media/404.png" alt="lost sailor"/>
      <span>Twoje odkrywcze pobódki zaprowadziły Cie w niezbadane lądy.</span>
      <span>Niestety, w moim portfolio takich nie mam...</span>
      <Link to="/"><div className={classes.backBtn}>Zabierz mnie z powrotem do portu</div></Link>
      
    </div>
  )
}

export default NotFound

