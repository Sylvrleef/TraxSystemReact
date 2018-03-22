import axios from "axios";

export default {
  // Gets all books
  getItems: function() {
    return axios.get("/api/detail");
  },
  // Gets the book with the given id
  getItem: function(id) {
    return axios.get("/api/detail/" + id);
  },
  // Deletes the book with the given id
  deleteItem: function(id) {
    return axios.delete("/api/detail/" + id);
  },
  // Saves a book to the database
  saveItem: function(itemData) {
    return axios.post("/api/detail", itemData);
  }
};
