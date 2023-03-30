import myHeader from "./components/myHeader.js";
import myBaner from "./components/myBaner.js";
import MyPost from "./components/MyPost.js";
import myAside from './components/MyAside.js';
import Contenido from "./components/Contenido.js";
import tabla from "./components/tabla.js"
import article_3 from "./components/article_3.js";

myHeader.listTitle();
myHeader.listCompany();

myBaner.showImage();
myBaner.listTitleBanner();
myBaner.listContentBanner();
myBaner.Button();

myAside.showAside();

MyPost.showCard();

Contenido.showArticle();

tabla.showArticle();

article_3.showArticle();    
