import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authors = [
  {
    id: 'P1',
    Name: 'P--1',
    Price: '500.25'
  },
  {
    id: 'P2',
    Name: 'P--2',
    Price: '600.00'
  },
  {
    id: 'P3',
    Name: 'P--3',
    Price: '750.25'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.Name.toLowerCase() + '-' + author.Price.toLowerCase();
};

class ProductsAPI {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }

  static saveAuthor(author) {
	author = Object.assign({}, author); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minAuthorNameLength = 3;
        if (author.Name.length < minAuthorNameLength) {
          reject(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.Price.length < minAuthorNameLength) {
          reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id === author.id);
          authors.splice(existingAuthorIndex, 1, author);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          author.id = generateId(author);
          authors.push(author);
        }

        
        resolve(author);
      }, delay);
    });
  }

//   static deleteAuthor(authorId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const indexOfAuthorToDelete = authors.findIndex(author => {
//           author.id == authorId;
//         });
//         authors.splice(indexOfAuthorToDelete, 1);
//         resolve();
//       }, delay);
//     });
//   }
}

export default ProductsAPI;