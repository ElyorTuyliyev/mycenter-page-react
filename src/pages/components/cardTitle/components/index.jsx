import "./style.css";

import { Link } from "react-router-dom";

function AwsTitle(props) {
  return (
    <>
      <Link className={`aws__title`} to={props.link}>
        {props.title}
      </Link>
    </>
  );
}

export default AwsTitle;
