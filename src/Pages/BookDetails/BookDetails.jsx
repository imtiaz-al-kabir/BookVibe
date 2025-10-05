import { useLocation, useParams } from "react-router";
import Swal from "sweetalert2";
import { addToStoreDb } from "../../Utility/adtoDb";
const BookDetails = () => {
  const id = useParams();
  console.log(id);

  const location = useLocation();
  console.log(location.state);
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    review,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = location.state;

  const handleMarkAsRead = (id) => {
    Swal.fire({
      title: "Good job!",
      text: "Added!",
      icon: "success",
    });
    addToStoreDb(id);
  };
  const handleWishList = (id) => {
     Swal.fire({
      title: "Good job!",
      text: "Added!",
      icon: "success",
    });
  
    addToStoreDb(id);
  };

  return (
    <div className="py-10">
      <div className="flex gap-10">
        <div className="bg-gray-300 rounded-2xl p-5 flex-1 shadow-sm">
          <figure>
            <img
              className="w-full h-170 shadow-base-100 object-contain rounded-2xl "
              src={image}
              alt="{bookName}"
            />
          </figure>
        </div>
        <div className="flex-1">
          <div className="">
            <h2 className="text-4xl font-bold font-serif">{bookName}</h2>
            <p className="text-xl">By: {author}</p>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between items-center">
            <div>
              <h1>{category}</h1>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <p className="text-justify">
              Review: <br /> {review}
            </p>
          </div>
          <div className="py-3 space-x-4">
            <div className="badge bg-gray-100 text-green-500">
              {location.state.tags[0]}
            </div>
            <div className="badge bg-gray-100 text-green-500">
              {location.state.tags[1]}
            </div>
          </div>
          <div className="divider"></div>
          <div>
            <h1>
              Number of Pages: <span className="ml-10">{totalPages}</span>
            </h1>
            <h2 className="pt-2">
              Publisher: <span className="ml-25">{publisher}</span>
            </h2>
            <h3 className="py-2">
              Year of Publishing:{" "}
              <span className="ml-9">{yearOfPublishing}</span>
            </h3>
            <h4 className="pb-4">
              Rating: <span className="ml-30">{rating}</span>
            </h4>
          </div>
          <div className="space-x-5">
            <button onClick={() => handleMarkAsRead(bookId)} className="btn">
              Mark as Read
            </button>
            <button
              onClick={() => handleWishList(bookId)}
              className="btn bg-[#469adc] text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
