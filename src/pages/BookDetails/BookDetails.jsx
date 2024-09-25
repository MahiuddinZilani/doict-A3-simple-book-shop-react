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
                  {/* book name */}
                  <h1 className="text-4xl font-bold">{bookName}</h1>
                  {/* author name */}
                  <p className="text-2xl font-bold my-2">Author: {author}</p>
                  {/* other details  */}
                  <p className="w-full flex justify-between">
                    <span className="font-semibold text-lg">Publisher:</span>{" "}
                    <span className="italic">{publisher}</span>
                  </p>
                  <p className="w-full flex justify-between">
                    <span className="font-semibold text-lg">
                      Year of Publishing:
                    </span>{" "}
                    <span className="italic">{yearOfPublishing}</span>
                  </p>
                  <p className="w-full flex justify-between">
                    <span className="font-semibold text-lg">Total Pages:</span>{" "}
                    <span className="italic">{totalPages}</span>
                  </p>
                  <p className="w-full flex justify-between">
                    <span className="font-semibold text-lg">Rating:</span>{" "}
                    <span className="italic">{rating}/5</span>
                  </p>
                  <p className="w-full flex justify-between">
                    <span className="font-semibold text-lg">Category:</span>{" "}
                    <span className="italic">{category}</span>
                  </p>
                  <p className="w-full flex flex-col gap-1 ">
                    <span className="font-semibold text-lg">Review:</span>{" "}
                    <span className="italic text-wrap">{review}</span>
                  </p>
                  <p className="w-full flex justify-between">
                    <span className="font-semibold text-lg">Tags:</span>{" "}
                    <span className="italic">{tags?.join(", ")}</span>
                  </p>
                </div>

                {/* Buttons with Toasts */}
                <div className="flex flex-col justify-center items-center my-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <button
                    onClick={() =>
                      handleClick(
                        `"${bookName}" has been successfully added to the Wishlist`
                      )
                    }
                    className="block w-full px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                  >
                    Wish to Read
                  </button>

                  <button
                    onClick={() =>
                      handleClick(
                        `${bookName} has been successfully added to the Cart`
                      )
                    }
                    className="block w-full px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
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
