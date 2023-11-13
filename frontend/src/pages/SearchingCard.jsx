import { useLoaderData } from "react-router-dom";
import CardList from "../components/CardList/CardList";

function SearchingCard() {
  const { cards } = useLoaderData();
  return <CardList apiData={cards} />;
}

export default SearchingCard;
