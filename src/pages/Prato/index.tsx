import styles from "./Prato.module.scss";
import { useLocation } from "react-router-dom";

export default function Pratos() {
  console.log(useLocation());
  return (
    <div>
        Prato
    </div>
  );
}
