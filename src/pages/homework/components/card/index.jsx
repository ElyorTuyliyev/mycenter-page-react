function CardHomework(props) {
  return (
    <>
      <div className="home__card-wrapper">
        <h3 className="home__card-title">{props.title}</h3>
        <p>{props.teacher}</p>
        <p>{props.teacherName}</p>
        <div>
          <div>
            <i className={props.icon1}></i>
            <p>
              {props.dataText} <span>{props.data}</span>
            </p>
          </div>
          <div>
            <i className={props.icon2}></i>
            <p>
              {props.finishDataText} <span>{props.finishDatayarn}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHomework;
