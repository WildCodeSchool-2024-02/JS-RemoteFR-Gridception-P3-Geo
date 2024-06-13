// Import the repository modules responsible for handling data operations on the tables
const ImagesRepository = require("./models/ImagesRepository");
const CarsRepository = require("./models/CarsRepository");
const ItemRepository = require("./models/ItemRepository");
const UsersRepository = require("./models/UsersRepository")
const ReservationsRepository = require("./models/ReservationsRepository");
const PlugsRepository = require("./models/PlugsRepository");
const TerminalsRepository = require("./models/TerminalsRepository");
const PlugsTypesRepository = require("./models/PlugsTypesRepository");
const BrandsRepository = require("./models/BrandsRepository");






// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.item = new ItemRepository();
tables.users = new UsersRepository();
tables.images = new ImagesRepository();
tables.reservations = new ReservationsRepository();
tables.terminals = new TerminalsRepository();
tables.plugsTypes = new PlugsTypesRepository;
tables.brands = new BrandsRepository();
tables.plugs = new PlugsRepository();
tables.cars = new CarsRepository();



/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
