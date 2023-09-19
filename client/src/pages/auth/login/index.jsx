
import LoginContent from "./LoginContent";
import RegistrationContent from "./RegistrationContent";
import _styles from "./_styles.module.css";

function Login() {
  return (
    <div className={_styles.grid_container}>
      <div className={_styles.grid_item}>
        <LoginContent />
      </div>
      <div className={_styles.separator}></div>
      <div className={_styles.grid_item}>
        <RegistrationContent />
      </div>
    </div>
  )
}

export default Login