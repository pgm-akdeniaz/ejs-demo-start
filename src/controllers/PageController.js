import { Script } from "vm";
import { person } from "../data/data.js";

export const home = (req, res) => {
  res.render("home", {
    title: "Dinosaurs are awesome!",
    content: "Dinosaurs are cool creatures",
  });
};

export const about = (req, res) => {
  res.render("default", {
    title: "About us",
    content: "We are a group of dinosaur enthusiasts",
    team: [
      "T-Rex",
      "Velociraptor",
      "Stegosaurus",
      "<strong>Premium</strong> Diplodocus",
    ],
  });
};

export const contact = (req, res) => {
  res.render("contact", {
    title: "Contact",
    content: "Contact us at 09 223 40 89",
    person,
  });
};

export const privacy = (req, res) => {
  res.render("default", {
    title: "Privacy Policy",
    content: "Dinosaurs are protective of their privacy",
  });
};
