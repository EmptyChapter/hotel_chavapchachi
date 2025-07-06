import { Request, Response } from "express";
import RoomSearchRequestParams from "../../models/RoomSearchRequestParams";
import SearchResponse from "../../models/RoomSearchResponse";
import { Rooms } from "../../stores";

/** Handles rooms search request. */
async function roomsHandler(req: Request<{}, {}, {}, RoomSearchRequestParams>, res: Response<SearchResponse>) {
  console.log("[Rooms] Handling 'list' request...");
  const dateStart = new Date(req.query.dateStart);
  const dateEnd = new Date(req.query.dateEnd);

  if (+dateStart < Date.now() || dateEnd <= dateStart) {
    console.error("[Rooms] 'list' request handled: Error.");
    res.status(400).json({
      isSuccessful: false,
      errorMessage: "Invalid date range",
    });
    return;
  }

  res.json({
    isSuccessful: true,
    rooms: await (Object.keys(req.query).length == 0 ? Rooms.list() : Rooms.listAvailable(dateStart, dateEnd)),
  });
  console.log("[Rooms] 'list' request handled: Success.");
}

export default roomsHandler;
