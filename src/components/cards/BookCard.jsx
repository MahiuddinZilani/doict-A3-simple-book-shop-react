import PropTypes from "prop-types";
const BookCard = ({ book }) => {
  const {
    bookId,
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

  console.log(book);

  return <div>{bookName}</div>;
};

export default BookCard;

BookCard.propTypes = {
  book: PropTypes.object,
};
