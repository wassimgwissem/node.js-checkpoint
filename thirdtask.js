const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
})

fs.readFile('hello.txt','utf8', (err, data) => {
  if (err) {
      console.error('Error reading file:', err);
      return;
    }
  console.log(data);
});