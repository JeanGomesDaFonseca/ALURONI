import React from "react";
import style from "./Itens.module.scss";
import cardapio from "./Itens.json";
import Item from "./Item/Item";

export default function Itens() {
  return (
    <div className={style.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
