import "../style.scss";
import "animate.css";
import * as bootstrap from "bootstrap";
import Scrollbar from "smooth-scrollbar";
import { showLoader, removeLoader } from "../js/loader";
import { load, timing } from "../js/function";

load(showLoader());
timing(removeLoader());
  
//scrollbar init
Scrollbar.init(document.querySelector(".dash-menu"));
Scrollbar.init(document.querySelector(".activity-list-control"));
Scrollbar.init(document.querySelector(".noti-lists"));

Scrollbar.init(document.querySelector("#content-scroll"));
Scrollbar.init(document.querySelector("#dashboard"));
