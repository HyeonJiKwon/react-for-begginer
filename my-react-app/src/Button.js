import PropType from 'prop-types';
import styles from "./Button.module.css"; 

function Button({text}){
  return <button className={styles.btn}>{text}</button>
}
Button.prototype = {
  text : PropType.string.isRequired
}
export default Button;