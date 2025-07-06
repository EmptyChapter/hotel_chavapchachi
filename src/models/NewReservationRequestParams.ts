import { Reservation } from "@prisma/client";

/** Represents new reservation request parameters. */
type NewReservationRequestParams = Omit<Reservation, "id" | "isVip" | "cost">;

export default NewReservationRequestParams;
