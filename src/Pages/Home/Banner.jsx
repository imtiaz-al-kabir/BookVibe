import bookImg from "../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="flex justify-around items-center bg-gray-200 py-10 rounded-2xl my-5">
      <div >
        <h1>Books to freshen up your bookshelf</h1>
        <button className="btn bg-[#23be0a] text-white rounded-lg">View The List</button>
      </div>
      <div>
        <img className="size-72 rounded-2xl" src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
