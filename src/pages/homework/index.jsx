import CardTitle from "../components/cardTitle";
import CardHomework from "./components/card";

function Homework() {
  const homework__card = [
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024s",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
    },
  ];
  return (
    <>
      <CardTitle />
      <h2>Uy vazifalari</h2>
      <div className="homework__card-wrapper">
        <CardHomework />
      </div>
    </>
  );
}

export default Homework;
