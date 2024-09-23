// const Home = () => {
//   return <div></div>;
// };

import { useLoaderData } from "react-router-dom";
import BookCard from "../../components/cards/BookCard";

// export default Home;

function Home() {
  const books = useLoaderData();

  // console.log(data);
  return (
    <div className="">
      <p>Home</p>
      {books.map((book) => (
        <BookCard key={book.id} book={book}></BookCard>
      ))}
      {/* {data.map((item) => (
        <p key={item.id}>{item.bookName}</p> // Return JSX and add a unique key
      ))} */}
    </div>
  );
}

export default Home;
