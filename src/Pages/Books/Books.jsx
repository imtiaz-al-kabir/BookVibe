import Book from "../Book/Book";

const Books = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Books</h1>
      <div className="grid sm:grid-cols-3 gap-5 py-10 px-5 ">
        {data.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
