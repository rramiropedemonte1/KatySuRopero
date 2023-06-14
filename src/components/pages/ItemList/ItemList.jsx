import Card from "../../common/card/Card/Card";
import "./ItemList.css";

const ItemList = ({ data }) => {
  return (
    <div className="indumentaria-div">
      {data.map((indumentaria) => (
        <Card key={indumentaria.id} info={indumentaria} />
      ))}
    </div>
  );
};

export default ItemList;
