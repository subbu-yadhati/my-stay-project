import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/Auth.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  selectedCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controller/Category.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  // requireSignIn,
  // isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  // requireSignIn,
  // isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);
router.get("/select-category/:slug", selectedCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  // requireSignIn,
  // isAdmin,
  deleteCategoryCOntroller
);

export default router;
