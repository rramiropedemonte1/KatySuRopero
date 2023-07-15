import Card from "../../common/card/Card/Card";
import "./ItemList.css";

const ItemList = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="indumentaria-div">
        {data.map((info) => {
          return <Card key={info.id} info={info} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
