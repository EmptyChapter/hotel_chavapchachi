import { PrismaClient } from "@prisma/client";

export * as Customers from "./CustomerStore";
export * as Rooms from "./RoomStore";
export * as Reservations from "./ReservationStore";

/** Prisma client instance. */
export const prisma = new PrismaClient();
