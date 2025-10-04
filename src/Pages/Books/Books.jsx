import Book from "../Book/Book";

const Books = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Books</h1>
      <div className="grid grid-cols-3 gap-5 py-10 ">
        {data.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
