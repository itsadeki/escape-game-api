import { connect } from "mongoose";

class Context {
  private static instance: Context | undefined;
  readonly NODE_ENV: string;
  readonly PORT: string | number;
  readonly MONGO_URI: string;

  private constructor() {
    this.NODE_ENV = process.env.NODE_ENV || "development";
    this.PORT = process.env.PORT || 5000;
    this.MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";

    connect(this.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log("MongoDB connected..."))
      .catch((err) => console.log(err));
  }

  static getInstance() {
    if (this.instance === undefined) {
      this.instance = new Context();
    }
    return this.instance;
  }
}

export default Context;
