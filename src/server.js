const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(path.resolve('views', 'partials'));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  const dateNow = new Date().toString();
  const log = `${dateNow}: ${req.method} ${req.url}`;

  console.log(log);

  fs.appendFile('server.log', `${log}\n`, (err) => {
    if (err) {
      console.log('Unable to save file');
    }
  });
  next();
});

// app.use((req, res) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static('public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome to my website',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error',
  });
});

app.listen(port, () => console.log(`Server is up on port ${port}`));
