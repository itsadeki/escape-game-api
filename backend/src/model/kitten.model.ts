import { model, Schema, Document, Model } from "mongoose";

export interface IKitty extends Document {
  name: string;
}

export const kittySchema = new Schema({
  name: String,
});

const Kitten: Model<IKitty> = model("Kitten", kittySchema);

export default Kitten;
