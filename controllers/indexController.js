// controllers/indexController.js
const db = require("../db/queries");

function getIndex(req, res) {
  res.render("pages/index", { title: "Home" });
}

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

function getNew(req, res) {
  res.render("pages/new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  console.log("username to be saved:", username);
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  createUsernamePost,
  getNew,
  getUsernames,
  getIndex,
};
