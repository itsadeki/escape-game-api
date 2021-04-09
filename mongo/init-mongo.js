db.createUser({
  user: "itsadeki",
  pwd: "doesitreallymatterwhatthisis",
  roles: [
    {
      role: "readWrite",
      db: "escapeGame",
    },
  ],
});
