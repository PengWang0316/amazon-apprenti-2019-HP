import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private ADD_NEW_BOOK_API = 'http://ec2-54-149-174-59.us-west-2.compute.amazonaws.com:4000/book';
  private ADD_NEW_BIRTHDAY_CARD_API = 'http://ec2-54-149-174-59.us-west-2.compute.amazonaws.com:4000/birthdayCard';
  private FETCH_BOOKS_API = 'http://ec2-54-149-174-59.us-west-2.compute.amazonaws.com:4000/books';
  private FETCH_BIRTHDAY_CARDS_API = 'http://ec2-54-149-174-59.us-west-2.compute.amazonaws.com:4000/birthdayCards';
  private FETCH_BOOK_API = this.ADD_NEW_BOOK_API;
  private UPDATE_BOOK_API = this.ADD_NEW_BOOK_API;
  private DELETE_BOOK_API = this.ADD_NEW_BOOK_API;
  private FETCH_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private UPDATE_BIRTHDAY_CARDK_API = this.ADD_NEW_BIRTHDAY_CARD_API;
  private DELETE_BIRTHDAY_CARD_API = this.ADD_NEW_BIRTHDAY_CARD_API;


  constructor(private httpClient: HttpClient) { }

  fetchBook(id: string) {
    return this.httpClient.get(`${this.FETCH_BOOK_API}/${id}`);
  }

  fetchBirthdayCard(id: string) {
    return this.httpClient.get(`${this.FETCH_BIRTHDAY_CARD_API}/${id}`);
  }

  fetchBooks() {
    return this.httpClient.get(this.FETCH_BOOKS_API);
  }

  fetchBirthdayCards() {
    return this.httpClient.get(this.FETCH_BIRTHDAY_CARDS_API);
  }

  addOrUpdateBook(
    book: { title: string; isbn: string; author: string;picture: string, price: number, _id: null | string }) {
    if (!book._id || book._id === '') return this.httpClient.post(this.ADD_NEW_BOOK_API, book);
    return this.httpClient.put(this.UPDATE_BOOK_API, book);
  }

  deleteBook(id: string) {
    return this.httpClient.delete(`${this.DELETE_BOOK_API}/${id}`);
  }

  addOrUpdateBirthdayCard(
    card: { title: string; material: string; picture: string, price: number, _id: null | string }) {
    if (!card._id || card._id === '') return this.httpClient.post(this.ADD_NEW_BIRTHDAY_CARD_API, card);
    return this.httpClient.put(this.UPDATE_BIRTHDAY_CARDK_API, card);
  }

  deleteBirthdayCard(id: string) {
    return this.httpClient.delete(`${this.DELETE_BIRTHDAY_CARD_API}/${id}`);
  }
}
