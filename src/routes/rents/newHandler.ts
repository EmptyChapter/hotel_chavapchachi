import { Request, Response } from "express";
import { Customers, Reservations, Rooms } from "../../stores";
import NewReservationRequestParams from "../../models/NewReservationRequestParams";
import NewReservationResponse from "../../models/NewReservationResponse";

/** Handles new reservation request. */
async function newHandler(req: Request<{}, {}, NewReservationRequestParams>, res: Response<NewReservationResponse>) {
  console.log("[Reservations] Handling 'new' request...");
  const { customerId, roomId } = req.body;
  const dateStart = new Date(req.body.dateStart);
  const dateEnd = new Date(req.body.dateEnd);

  if (!(await Customers.exists(customerId))) {
    console.error("[Reservations] 'new' request handled: Error.");
    res.status(404).json({
      isSuccessful: false,
      errorMessage: "Customer not found",
    });
    return;
  }

  if (!(await Rooms.exists(roomId))) {
    console.error("[Reservations] 'new' request handled: Error.");
    res.status(404).json({
      isSuccessful: false,
      errorMessage: "Room not found",
    });
    return;
  }

  if (+dateStart < Date.now() || dateStart >= dateEnd) {
    console.error("[Reservations] 'new' request handled: Error.");
    res.status(400).json({
      isSuccessful: false,
      errorMessage: "Incorrect date range",
    });
    return;
  }

  if (!(await Rooms.isAvailable(roomId, dateStart, dateEnd))) {
    console.error("[Reservations] 'new' request handled: Error.");
    res.status(400).json({
      isSuccessful: false,
      errorMessage: "Room is unavailable",
    });
    return;
  }

  const diffTime = Math.abs(+dateEnd - +dateStart);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const reservation = await Reservations.create({
    ...req.body,
    dateStart,
    dateEnd,
    isVip: await Customers.isVip(customerId),
    cost: (await Rooms.getPrice(roomId)) * diffDays,
  });

  res.status(201).json({
    isSuccessful: true,
    reservationId: reservation.id,
  });
  console.error("[Reservations] 'new' request handled: Success.");
}

export default newHandler;
