import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category } = book;
  return (
    <Link state={book} to={`/book-details/${bookId}`}>
      <div className="card bg-base-100 p-5 shadow-sm">
        <figure>
          <img className="w-full h-50 object-cover" src={image} alt="Shoes" />
        </figure>
        <div className="py-3 space-x-4">
          <div className="badge bg-gray-100 text-green-500">{book.tags[0]}</div>
          <div className="badge bg-gray-100 text-green-500">{book.tags[1]}</div>
        </div>
        <div className="">
          <h2 className="card-title">{bookName}</h2>
          <p className="text-xs">By: {author}</p>
        </div>
        <div className="border-t-2 border-dashed my-2 border-gray-300"></div>
        <div className="flex justify-between items-center">
          <div>{category}</div>
          <div>
            <FaStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
