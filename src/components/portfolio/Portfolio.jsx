import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { formAppPortfolio, restaurant, astrakhanPharmacies } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("form-App");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "form-App",
      title: "Form-App",
    },
    {
      id: "restaurant",
      title: "Restaurant",
    },
    {
      id: "astrakhanPharmacies",
      title: "Astrakhan-pharmacies",
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
      case "astrakhanPharmacies":
        setData(astrakhanPharmacies);
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
            link={item.link}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank" className="item" rel="noreferrer">
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
