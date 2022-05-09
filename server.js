//=================REQUIRED PACKAGES AND MIDDLEWARE=================//

  //--REQUIRED TO MOVE HTML VIA JS--//
const path = require('path');
  //--REQUIRED FOR ROUTING--//
const express = require('express');
  //--REQUIRED TO SET UP CURRENT SESSION FOR USER--//
const session = require('express-session');
  //--REQUIRED FOR HANDLEBAR VIEWS--//
const exphbs = require('express-handlebars');
  //--SETTING UP CONNECTION WITH ENVIROMENTAL VARS--//
const sequelize = require("./config/config");
  //--REQUIRED TO CALL IN HELPER FUNCTIONS--//
const helpers = require('./utils/helper');
  //--SETTING UP EXPRESS AND DYNAMIC PORT--//
const app = express();
const PORT = process.env.PORT || 3001;


const SequelizeStore = require("connect-session-sequelize")(session.Store);

  //--HOLDS INFO FOR CURRENT SESSION--//
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

  //--SAME THING AS REQUIRING ROUTE ABOVE--//
app.use(require('./controllers'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
