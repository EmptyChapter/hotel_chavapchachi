import { Request, Response } from "express";
import CancelReservationRequestParams from "../../models/CancelReservationRequestParams";
import ApiResponse from "../../models/ApiResponse";
import { Customers, Reservations } from "../../stores";

/** Handles cancel reservation request. */
async function cancelHandler(req: Request<{}, {}, CancelReservationRequestParams>, res: Response<ApiResponse>) {
  console.log("[Reservations] Handling 'cancel' request...");
  const { id, customerId } = req.body;

  if (!(await Customers.exists(customerId))) {
    console.error("[Reservations] 'cancel' request handled: Error.");
    res.status(404).json({
      isSuccessful: false,
      errorMessage: "Customer not found",
    });
    return;
  }

  const reservation = await Reservations.getById(id);
  if (!reservation || reservation.customerId != customerId) {
    console.error("[Reservations] 'cancel' request handled: Error.");
    res.status(404).json({
      isSuccessful: false,
      errorMessage: "Reservation not found",
    });
    return;
  }

  if (+reservation.dateEnd <= Date.now()) {
    console.error("[Reservations] 'cancel' request handled: Error.");
    res.status(400).json({
      isSuccessful: false,
      errorMessage: "Reservation is over",
    });
    return;
  }

  await Reservations.remove(id);
  res.sendStatus(204);
  console.log("[Reservations] 'cancel' request handled: Success.");
}

export default cancelHandler;
