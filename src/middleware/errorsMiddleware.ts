import ApiResponse from "../models/ApiResponse";
import { NextFunction, Request, Response } from "express";

/** Handles request chain errors. */
async function errorMiddleware(err: Error, _: Request, res: Response<ApiResponse>, __: NextFunction) {
  res.status(500).json({
    isSuccessful: false,
    errorMessage: err.message,
  });
  console.log("Last request ended with internal server error.");
}

export default errorMiddleware;
