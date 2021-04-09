import { model, Schema, Document, Model } from "mongoose";
import { ITeam, TeamSchema } from "./team.model";

export interface IGame extends Document {
  dateDebut: string;
  dateFin: string;
  equipes: ITeam[];
}

export const GameSchema = new Schema({
  dateDebut: String,
  dateFin: String,
  equipes: [TeamSchema],
});

const Game: Model<IGame> = model<IGame>("Game", GameSchema);

export default Game;
