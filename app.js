import express from "express";
import connection from "./src/database/connection";
import homeRoutes from "./src/routes/homeRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  database() {
    const authentication = async () => {
      try {
        await connection.authenticate()
        return console.log('database connect')
      } catch (err) {
        return console.log(`database not connected ${err}`)
      }
    }

    authentication();
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

export default new App().app;
