import { Request, Response } from 'express';

import { addBook } from '../models/book';

const handler = (req: Request, res: Response) => {
  const { title, isbn, author, price } = req.body;
  try {
    addBook(title, isbn, author, price);
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
  res.status(200).end();
};

export default handler;
