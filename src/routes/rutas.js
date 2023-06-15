import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/pages/ItemListContainer/ItemListContainer";

ItemListContainer;

export const rutas = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
];
