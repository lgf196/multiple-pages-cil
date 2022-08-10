import "./index.scss";
import appImage from "@/assets/images/app.png";
window.onload = () => {
  console.log("appImage", appImage);
  document.querySelector("#appImg").src = appImage;
};
