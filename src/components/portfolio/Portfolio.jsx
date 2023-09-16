import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  formAppPortfolio,
  restaurant,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("form-App");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "form-App",
      title: "Form-App",
      text: "text",
    },
    {
      id: "restaurant",
      title: "Restaurant",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "form":
        setData(formAppPortfolio);
        break;
      case "restaurant":
        setData(restaurant);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(formAppPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            text={item.text}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href="https://form-app-tan.vercel.app/" className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </a>
        ))}
        {data.map((d) => (
          <div className="text">{d.text}</div>
        ))}
      </div>
    </div>
  );
}
