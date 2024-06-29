import { Router, Request, Response } from "express";
const router = Router();

interface User {
  email: string;
  number: string;
}


const data: User[] = [
  {
    email: "jim@gmail.com",
    number: "221122",
  },
  {
    email: "jam@gmail.com",
    number: "830347",
  },
  {
    email: "john@gmail.com",
    number: "221122",
  },
  {
    email: "jams@gmail.com",
    number: "349425",
  },
  {
    email: "jams@gmail.com",
    number: "141424",
  },
  {
    email: "jill@gmail.com",
    number: "822287",
  },
  {
    email: "jill@gmail.com",
    number: "822286",
  },
];

router.post("/user", async (req: Request, res: Response) => {
  if (req.body.email && req.body.number) {
    const fintData = data.filter(item => item.email == req.body.email && item.number == req.body.number)
    if (fintData[0]) {
      res.status(200).json(fintData);
    } else {
      res.json({ message: "Email topilmadi" });
    }
  } else {
    const fintData = data.filter(item => item.email == req.body.email)
    if (fintData[0]) {
      res.status(200).json(fintData);
    } else {
      res.json({ message: "Email topilmadi" });
    }
  }
});

module.exports = router;
