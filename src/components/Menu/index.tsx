import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";

export default function Menu() {
    // const rotas =[{
    //     label: 'Início',
    //     to: '/'
    // }, {}];
  return (
    <nav className={styles.menu}>
      <Logo />
    </nav>
  );
}


