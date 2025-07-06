import { Reservation } from "@prisma/client";
import { prisma } from ".";

/**
 * Gets reservation by given ID.
 * @param id Identifier of a reservation.
 * @returns Instance of reservation if found; `null` otherwise.
 */
export async function getById(id: number): Promise<Reservation | null> {
  return prisma.reservation.findFirst({ where: { id } });
}

/**
 * Removes reservation with given ID from database.
 * @param id Identifier of a reservation.
 * @returns Instance of removed reservation.
 */
export async function remove(id: number): Promise<Reservation> {
  return prisma.reservation.delete({ where: { id } });
}

/**
 * Creates new reservation.
 * @param data Reservation data.
 * @returns Instance of created reservation.
 */
export async function create(data: Omit<Reservation, "id">): Promise<Reservation> {
  return prisma.reservation.create({ data });
}
