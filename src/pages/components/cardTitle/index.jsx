import AwsTitle from "./components";
import "../style.css";
function CardTitle() {
  const cardTitle = [
    {
      title: "Talabalar",
      link: "/",
    },
    {
      title: "Uygavazifalar",
      link: "/Homework",
    },
  ];
  const handleClick = (title) => {};

  return (
    <>
      <div className="title__wrapper">
        {cardTitle.map((item) => (
          <AwsTitle key={item.title} to={item.link} {...item} />
        ))}
      </div>
    </>
  );
}
export default CardTitle;
