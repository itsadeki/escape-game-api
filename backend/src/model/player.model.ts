import { model, Schema, Document, Model } from "mongoose";

export interface IPlayer extends Document {
  nom: string;
  prenom: string;
}

export const PlayerSchema = new Schema({
  nom: String,
  prenom: String,
});

// const Player: Model<IPlayer> = model("Player", PlayerSchema);

// export default Player;
