import * as flsFunctions from "./modules/functions.js";
// import * as accordion from "./modules/accordion.js";
import * as phoneInput from "./modules/phoneinput.js";
// import * as mymodal from "./modules/modal.js";
import * as burger from "./modules/burger.js";
// import { smoothScroll } from "./modules/burger.js";
import { formValidate, formValidateBanner } from "./modules/form.js";
// import { onEntry } from "./modules/fadeBlocks.js";
import { MySwiper } from "./modules/swiper.js";
import * as Counterer from "./modules/counter.js";

flsFunctions.isWebp();
// accordion.showContent();
phoneInput.isPhone();
// mymodal.modal();
burger.burgerMenuCustom();
// smoothScroll();
formValidate();
formValidateBanner();
// onEntry();
MySwiper();
Counterer.windowLoad();

