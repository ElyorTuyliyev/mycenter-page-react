import "./style.css";

function CardHomework(props) {
  return (
    <>
      <div className="home__card-wrapper">
        <h3 className="home__card-title">{props.title}</h3>
        <p className="home__teacher">{props.teacher}</p>
        <p className="home__teacher-name">{props.teacherName}</p>
        <div className="home__data-wrapper">
          <div className="home__data-icon-wrapper">
            <i className={props.icon1}></i>
            <p>
              {props.dataText} <br /> <span>{props.data}</span>
            </p>
          </div>
          <div className="home__data-icon-wrapper">
            <i className={props.icon2}></i>
            <p>
              {props.finishDataText} <br /> <span>{props.finishData}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHomework;
