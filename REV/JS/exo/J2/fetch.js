import fetch from 'node-fetch'
import fs from 'fs';

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => {
      const userData = users.map((user) => ({
          name: user.name,
          coordinates: user.address
      }));
      fs.writeFile('users.json', JSON.stringify(userData), (err) => {
          if (err) {
              console.error(err);
              return;
          }
          console.log('Data written to file');
      });
  });