import PropTypes from "prop-types";
import Tag from "../tags/Tag";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  console.log(book);

  return (
    <div className="w-80 md:w/2 lg:w-full hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <div className=" max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="relative">
          <img
            className="object-cover object-center w-full h-40 top"
            src={image}
            alt="avatar"
          />

          <h1 className="absolute w-full px-2 py-2 bg-black bottom-0 opacity-70 inline text-lg font-medium text-yellow-300">
            {bookName}
          </h1>
        </div>

        <div className="px-4 py-2 flex flex-col space-y-2">
          <div>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Author: {author}
            </h1>
            <p className="py-2 text-gray-700 dark:text-gray-400">
              Category: {category}
            </p>
            <div className="flex items-center justify-between">
              <p className="py-2 text-gray-700 dark:text-gray-400">Tags: </p>
              <div className="flex items-center justify-evenly text-xs gap-1">
                {tags.map((tag) => (
                  <Tag key={tag.id} tag={tag}></Tag>
                ))}
              </div>
            </div>

            <p className="py-2 text-gray-700 dark:text-gray-400">
              Rating:{rating}/5
            </p>
          </div>

          <Link
            to={`/book/${bookId}`}
            className="bg-slate-900 rounded-lg text-sm sm:text-base flex items-center gap-x-3 justify-center text-white hover:bg-slate-900/80 duration-300 transition-colors border border-transparent px-8 py-2.5"
          >
            <FaBookOpen />
            Book Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.object,
};

// const {
//     bookId,
//     bookName,
//     author,
//     image,
//     review,
//     totalPages,
//     rating,
//     category,
//     tags,
//     publisher,
//     yearOfPublishing,
//   } = book;
