import { ArticleDetails } from "./articleDetails.js";
import { ReviewManager } from "./reviewManager.js";

function getParam(name) {
  const UrlParam = new URLSearchParams(window.location.search);
  return UrlParam.get(name);
}

const articleId = getParam("id");
const apiUrl = "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles";

const articleDetails = new ArticleDetails(articleId, apiUrl);
const reviewManager = new ReviewManager(articleId, apiUrl);
