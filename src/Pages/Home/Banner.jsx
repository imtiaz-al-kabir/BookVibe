import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-5   sm:justify-around items-center bg-gray-200 py-10 rounded-2xl m-5 ">
      <div className="text-center">
        <h1 className="text-2xl font-serif font-bold py-5">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23be0a] text-white rounded-lg">
          View The List
        </button>
      </div>
      <div>
        <img className="size-72 rounded-2xl" src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
