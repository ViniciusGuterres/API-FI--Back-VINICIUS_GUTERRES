const UsersRoutes = require('./UserRoutes');
const MovieRoutes = require('./MovieRoutes');

module.exports = (app) => {
    UsersRoutes(app);
    MovieRoutes(app);
}
