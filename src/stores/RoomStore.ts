import { Room } from "@prisma/client";
import { prisma } from ".";

/**
 * Gets a collection of all rooms.
 * @returns A collection of rooms.
 */
export async function list(): Promise<Room[]> {
  return prisma.room.findMany();
}

/**
 * Gets collection of available rooms for given period.
 * @param dateStart Check-in date.
 * @param dateEnd Check-out date.
 * @returns A collection of rooms that are available.
 */
export async function listAvailable(dateStart: Date, dateEnd: Date): Promise<Room[]> {
  return prisma.$queryRaw<Room[]>`
    select * from "Room" r
    where not exists (
      select 1
      from "Reservation" r2
      where r2."roomId" = r.id
      and r2."dateStart"::Date <= CAST(${dateEnd} as Date)
      and r2."dateEnd"::Date >= CAST(${dateStart} as Date)
    )`;
}

/**
 * Determines whether or not room is available for given period.
 * @param id Identifier of a room.
 * @param dateStart Check-in date.
 * @param dateEnd Check-out date.
 * @returns `true` if room is available; `false` otherwise.
 */
export async function isAvailable(id: number, dateStart: Date, dateEnd: Date): Promise<boolean> {
  return (
    (await prisma.$executeRaw`
    select * from "Room" r
    where r.id = ${id} and not exists (
      select 1
      from "Reservation" r2
      where r2."roomId" = r.id
      and r2."dateStart"::Date <= CAST(${dateEnd} as Date)
      and r2."dateEnd"::Date >= CAST(${dateStart} as Date)
    )`) != 0
  );
}

/**
 * Determines whether or not room exists.
 * @param id Identifier of a room.
 * @returns `true` if room exists; `false` otherwise.
 */
export async function exists(id: number): Promise<boolean> {
  return (await prisma.room.count({ where: { id } })) != 0;
}

/**
 * Gets a price of a room.
 * @param id Identifier of a room.
 * @returns Room price.
 */
export async function getPrice(id: number): Promise<number> {
  return (await prisma.room.findFirst({ select: { price: true }, where: { id } }))!.price;
}
