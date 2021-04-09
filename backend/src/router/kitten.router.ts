import { Router } from "express";
import kittenModel from "../model/kitten.model";

const router = Router();

router.get("/", (req, res) => {
  try {
    kittenModel
      .find()
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

router.post("/", (req, res) => {
  try {
    const kitten = new kittenModel({ name: "Silence" });
    kitten.save();
    res.status(200).json(kitten);
  } catch (error) {
    res.status(500).json({
      err: error,
      data: null,
    });
  }
});

export default router;
