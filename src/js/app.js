// import "./hadlebars";
import Handlebars from "handlebars";
import users from "../users.json";
import usersTemplate from "../templates/users.hbs";

const userBoxRef = document.querySelector(".users__box");

userBoxRef.innerHTML = usersTemplate(users);