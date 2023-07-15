import { TextField, darkScrollbar } from "@mui/material";
import { Button } from "react-bootstrap";
import "./Checkout.css";
import ItemList from "../ItemList/ItemList";
import Card from "../../common/card/Card/Card";

const Checkout = ({ handleSumbit, handleChange, errors }) => {
  return (
    <>
      <div>
        <form className="form-actions" onSubmit={handleSumbit}>
          <div className="content">
            <TextField
              className="content-text"
              label="Name"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
            />
            <TextField
              className="content-text"
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
            />
            <TextField
              className="content-text"
              label="Phone"
              variant="outlined"
              name="phone"
              onChange={handleChange}
              helperText={errors.phone}
              error={errors.phone ? true : false}
            />
            <TextField
              className="content-text"
              label="Last name"
              variant="outlined"
              name="name"
              onChange={handleChange}
              helperText={errors.name}
              error={errors.name ? true : false}
            />
            <div className="button-form">
              <Button
                className="carrito-acciones-comprar-form"
                variant="outlined"
                type="submit"
              >
                Finalizar compra
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
