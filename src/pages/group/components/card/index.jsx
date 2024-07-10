import "./style.css";

function Card(props) {
  return (
    <>
      <div className="card__wrapper">
        <img className="card__img" src={props.img} alt="person" />
        <h2 className="card__name">{props.name}</h2>
        <p className="card__phone">
          <i id="card__icon" class={props.icon}></i> {props.phone}
        </p>
      </div>
    </>
  );
}

export default Card;
