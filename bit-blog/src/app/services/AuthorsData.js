import Authors from "../entities/Authors";

class AuthorsData {
  fetchAuthorsData() {
    return fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        const authorsData = result;
        return authorsData;
      })
      .then(authorsData => {
        return authorsData.map(data => {
          return new Authors(data);
        });
      });
  }
  fetchAuthorsDetails(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        return response.json();
      })
      .then(authorId => {
        return new Authors(authorId);
      });
  }
}
export const authorsData = new AuthorsData();
