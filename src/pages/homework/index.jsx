import CardTitle from "../components/cardTitle";
import CardHomework from "./components/card";
import "./style.css";
function Homework() {
  const homework__card = [
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
    {
      title: "Todo list with react",
      teacher: "Guruh / O'qituvchi",
      teacherName: "AWS-18 / Abduboriy Mirzayev",
      icon1: "fa-regular fa-calendar-days",
      dataText: "Yaratilgan",
      data: "02.07.2024",
      icon2: "fa-regular fa-clock",
      finishDataText: "Tugash muddat",
      finishData: "04,07,2024",
    },
  ];
  return (
    <>
      <CardTitle />
      <h2 className="homework__title">Uy vazifalari</h2>
      <div className="homework__card-wrapper">
        {homework__card.map((item) => (
          <CardHomework key={item.data} {...item} />
        ))}
      </div>
    </>
  );
}

export default Homework;
