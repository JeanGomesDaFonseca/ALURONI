import filtros from "./Filtros.json";
import style from './Filtros.module.scss'

type IOpcao = typeof filtros[0];

export default function Filtros() {
  function selecionarFiltro(opcao: IOpcao) {}

  return (
    <div className={style.filtros}>
      {filtros.map((opcao) => (
        <button className={style.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  );
}
