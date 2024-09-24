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
      <div className="bg-gray-100 min-h-screen py-12 pt-2">
        <Banner></Banner>
        <hr />
        <div className="mx-auto max-w-screen-lg container sticky top-[60px] z-10">
          <h1 className="mx-auto mb-4 py-4 rounded-lg text-xl bg-gradient-to-l from-slate-900 to-orange-900 lg:text-3xl text-center text-white font-bold">
            Explore Our Collection of Masterpieces
          </h1>
        </div>
        <div className="max-w-screen-lg mx-auto h-max container grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {books.map((book) => (
            <BookCard key={book.id} book={book}></BookCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
