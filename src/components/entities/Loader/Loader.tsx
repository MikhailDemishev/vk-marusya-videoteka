import sprite from "/src/assets/images/sprite/sprite.svg";
import "./Loader.scss";


export const Loader = () => (
  <div className="loader">
    <svg className="loader__icon" aria-hidden="true">
      <use href={`${sprite}#icon-loader`} xlinkHref={`${sprite}#icon-loader`} />
    </svg>
  </div>
);
