// const Home = () => {
//   return <div></div>;
// };

import { useLoaderData } from "react-router-dom";
import BookCard from "../../components/cards/BookCard";
import Banner from "../../components/banner/Banner";

// export default Home;

function Home() {
  const books = useLoaderData();
  console.log(books);

  return (
    <>
      <Banner></Banner>
      <div className=" mx-auto h-max container mt-8 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </>
  );
}

export default Home;
