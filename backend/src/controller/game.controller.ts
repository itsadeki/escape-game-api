import { Request, Response } from "express";
import Game from "../model/game.model";

class GameController {
  async getTime(idGame: string): Promise<number> {
    const game = await Game.findOne({ _id: idGame });
    const dateDebut = game?.dateDebut;
    if (!dateDebut) throw new Error("The game didn't start yet");
    const before = new Date(dateDebut);
    return Date.now() - before.getTime();
  }
}

export default GameController;
