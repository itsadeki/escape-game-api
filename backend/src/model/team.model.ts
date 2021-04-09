import { model, Schema, Document, Model } from "mongoose";
import { IPlayer, PlayerSchema } from "./player.model";

export interface ITeam extends Document {
  score: number;
  login: string;
  password: string;
  joueurs: IPlayer[];
}

export const TeamSchema = new Schema({
  score: Number,
  login: String,
  password: String,
  joueurs: [PlayerSchema],
});

// const Team: Model<ITeam> = model<ITeam>("Team", TeamSchema);

// export default Team;
