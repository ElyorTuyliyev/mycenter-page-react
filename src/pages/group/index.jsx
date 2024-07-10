import CardTitle from "../components/cardTitle";
import Card from "./components/card";
import Img from "../images/js.jpg";
import "./style.css";
function Group() {
  const card = [
    {
      img: Img,
      name: "I",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 888-88-88",
    },
    {
      img: Img,
      name: "you",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
    {
      img: Img,
      name: "He",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
    {
      img: Img,
      name: "She",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
    {
      img: Img,
      name: "We",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
    {
      img: Img,
      name: "You",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
    {
      img: Img,
      name: "They",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
    {
      img: Img,
      name: "Own",
      icon: "fa-solid fa-phone",
      phone: "+998 (88) 484-88-33",
    },
  ];
  return (
    <>
      <CardTitle />
      <h1 className="group__title">Talabalar</h1>
      <div className="card__home">
        {card.map((item) => (
          <Card {...item} key={item.name} />
        ))}
      </div>
    </>
  );
}
export default Group;
