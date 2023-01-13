import { Router } from "./routes.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/explorer", "/pages/explorer.html");
router.add("/universe", "/pages/universe.html");
router.add(404, "/pages/404.html");

router.handleRoutes();

window.onpopstate = () => router.handleRoutes();
window.eventWindow = () => router.eventWindow();

function capture(element) {
  return document.querySelector(element);
};

const bgBody = capture(".body");

const bgHome = capture(".home")
.addEventListener("click", () => {
  bgBody.classList.remove("background_universe");
  bgBody.classList.remove("background_explorer");
});

const bgUniverse = capture(".universe")
.addEventListener("click", () => {
  bgBody.classList.remove("background_explorer");
  bgBody.classList.add("background_universe");
});

const bgExplorer = capture(".explorer")
.addEventListener("click", () => {
  bgBody.classList.remove("background_universe");
  bgBody.classList.add("background_explorer");
});