import { Sequelize } from "sequelize";

const connection = new Sequelize("escola", "root", "Freitas@2021", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

export default connection;
