import { random } from "@/utils";
import "./index.scss";
const a = 1;
$(document).ready(function () {
  document.querySelector("#h2").innerHTML = random();
  console.log(random(), 222, process.env.APP_ENV);
});
