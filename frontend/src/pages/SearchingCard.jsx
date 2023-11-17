import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import CardList from "../components/CardList/CardList";
import styles from "./searchingCard.module.css";

function SearchingCard() {
  const { cards } = useLoaderData();

  return (
    <Suspense fallback={<div className={styles.loader} />}>
      <Await resolve={cards}>{(data) => <CardList cards={data} />}</Await>
    </Suspense>
  );
}

export default SearchingCard;
