import { Router } from "express";
import GameController from "../controller/game.controller";
import Game from "../model/game.model";

const router = Router();
const gameController = new GameController();

router.get("/", (req, res) => {
  try {
    Game.find()
      .then((data) =>
        res.status(200).json({
          err: null,
          data,
        })
      )
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          err,
          data: null,
        });
      });
  } catch (error) {
    res.status(500).json({
      err: error,
      data: null,
    });
  }
});

router.get("/:id/timeGame", (req, res) => {
  if (!req.params.id) {
    res.status(400).json({
      err: new Error("Invalid param id"),
      data: null,
    });
    return;
  }

  gameController
    .getTime(req.params.id)
    .then((data: number) => {
      res.status(200).json({
        err: null,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        err,
        data: null,
      });
    });
});

router.post("/", (req, res) => {
  try {
    const game = new Game(req.body);
    game.save();
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({
      err: error,
      data: null,
    });
  }
});

export default router;
