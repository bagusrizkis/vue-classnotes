if (process.env.NODE_ENV != "production") require("dotenv").config();
const { urlencoded, json } = require("express");
const { User, Student } = require("./db/models");
const jwt = require("jsonwebtoken");
const app = require("express")();
app.use(require("cors")());
app.use(urlencoded({ extended: true }));
app.use(json());
// ? BEGIN SECRET VAR
const SECRET_JWT = process.env.SECRET_JWT || "inirahasia";
// ? END SECRET VAR

// ? BEGIN CUSTOM MIDDLEWARE
function mAuth(r, s, n) {
  if (!r.headers.access_token)
    s.status(401).json({ message: "access_token invalid" });
  try {
    const data = jwt.decode(r.headers.access_token, SECRET_JWT);
    User.findOne({
      where: {
        id: data.id,
        email: data.email,
      },
    })
      .then((user) => {
        r.currentUser = user;
        n();
      })
      .catch((err) => {
        s.status(401).json({ err: err });
      });
  } catch (e) {
    s.status(500).json({ err: e });
  }
}
// ? END CUSTOM MIDDLEWARE

// ? BEGIN ENDPOINT

app.get("/", (req, res) => {
  res.status(200).json({
    version: "1.0.0",
    name: "server vue component",
  });
});

app.post("/users/register", ({ body }, res) => {
  User.create({
    email: body.email,
    password: body.password,
  })
    .then(({ id, email }) => {
      const token = jwt.sign({ id, email }, SECRET_JWT);
      res.status(201).json({ access_token: token });
    })
    .catch((err) => {
      res.status(500).json({ errMessage: err });
    });
});

app.post("/users/login", ({ body }, res) => {
  User.findOne({
    where: {
      email: body.email,
      password: body.password,
    },
  })
    .then((d) => {
      if (d == null) s.status(400).json({ message: "wrong email or password" });
      const token = jwt.sign({ id: d.id, email: d.email }, SECRET_JWT);
      res.status(200).json({ access_token: token });
    })
    .catch((err) => {
      res.status(500).json({ errMessage: err });
    });
});

app.post("/students", mAuth, (req, res) => {
  Student.create({
    name: req.body.name,
    phase: req.body.phase,
    notes: req.body.notes,
  })
    .then((d) => {
      res.status(201).json({ data: d, message: "Success create" });
    })
    .catch((err) => {
      res.status(500).json({ errMessage: err });
    });
});

app.get("/students", mAuth, (req, res) => {
  Student.findAll()
    .then((d) => {
      res.status(200).json({ data: d });
    })
    .catch((err) => {
      res.status(500).json({ errMessage: err });
    });
});

app.delete("/students/:id", mAuth, (req, res) => {
  Student.destroy({ where: { id: req.params.id } })
    .then((d) => {
      res.status(200).json({ data: d, message: "Success delete" });
    })
    .catch((err) => {
      res.status(500).json({ errMessage: err });
    });
});

// ? END ENDPOINT

app.listen(process.env.PORT || 3000, () => {
  console.log("🚀 Listening on: http://localhost:%s", process.env.PORT || 3000);
});
