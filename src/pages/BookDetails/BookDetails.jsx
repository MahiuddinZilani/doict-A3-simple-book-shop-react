import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const book = books[bookId - 1];

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  console.log(Array.isArray(books), bookId, book);

  const handleClick = (message) => {
    toast.success(message, {
      position: "top-left",
      autoClose: 3000,
    });
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className=" max-w-screen-lg mx-auto min-h-screen py-12">
          {/* ToastContainer renders the toast notifications */}
          <ToastContainer />

          <div className="mx-auto lg:h-[75vh] lg:flex  container lg:gap-4 bg-yellow-50">
            {/* Image Section */}
            <div className="w-full h-full lg:w-1/2 lg:h-auto">
              <img src={image} alt="" className="w-fit min-h-full" />
            </div>

            {/* Book Details Section */}
            <div className="flex items-center justify-center w-full px-6 lg:h-full lg:w-1/2">
              <div className="max-w-xl">
                <div className="lg:ml-8 mt-4 lg:mt-0">
                  <h1 className="text-4xl font-bold">{bookName}</h1>
                  <p className="text-lg mt-2">Author: {author}</p>
                  <p>Publisher: {publisher}</p>
                  <p>Year of Publishing: {yearOfPublishing}</p>
                  <p>Total Pages: {totalPages}</p>
                  <p>Rating: {rating}</p>
                  <p>Category: {category}</p>
                  <p>Review: {review}</p>
                  <p>Tags: {tags?.join(", ")}</p>
                </div>

                {/* Buttons with Toasts */}
                <div className="flex flex-col justify-center items-center mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <button
                    onClick={() =>
                      handleClick(
                        `"${bookName}" has been successfully added to the Wishlist`
                      )
                    }
                    className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Wish to Read
                  </button>

                  <button
                    onClick={() =>
                      handleClick(
                        `${bookName} has been successfully added to the Cart`
                      )
                    }
                    className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
