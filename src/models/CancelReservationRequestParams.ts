import { Reservation } from "@prisma/client";

/** Represents cancel reservation request parameters. */
type CancelReservationRequestParams = Omit<Reservation, "roomId" | "dateStart" | "dateEnd" | "isVip" | "cost">;

export default CancelReservationRequestParams;
