import React from "react";
import style from "./Item.module.scss";
import logo from "assets/logo.svg";
import cardapio from "../Itens.json"

type Props = typeof cardapio[0];

export default function Item(props: Props) {
  const {title, description, category} = props;
  return (
    <div className={style.item}>
      <div className={style.item__imagem}>
        <img src={logo} alt="imagem" />
      </div>
      <div className={style.item__descricao}>
        <div className={style.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.item__tags}>
          <div className={style.item__tipo}>{category.label}</div>
          <div className={style.item__porcao}>400g</div>
          <div className={style.item__qtdpessoas}>Serve duas pessoas </div>
          <div className={style.item__valor}>R$ 50</div>
        </div>
      </div>
    </div>
  );
}
