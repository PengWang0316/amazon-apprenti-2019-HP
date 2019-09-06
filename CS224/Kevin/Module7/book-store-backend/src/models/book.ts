import mongoose from 'mongoose';

type BookModel = mongoose.Document & {
  title: string;
  isbn: string;
  author: string;
  price: number;
};

// Build a schema and use it to do the validation
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: 0, max: 200 },
});

const Book = mongoose.model<BookModel>('Book', schema);

// Create a new book in the database
export const addBook = (title: string, isbn: string, author: string, price: number) => {
  new Book({ title, isbn, author, price }).save();
};

// Find a user based on the username
export const findUser = async (username: string) => await Book.findOne({ username })
  .select({ title: 1 });
