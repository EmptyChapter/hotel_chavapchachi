import { prisma } from ".";

/**
 * Determines whether or not customer with given ID exists.
 * @param id Identifier of a customer.
 * @returns `true` if customer exists; `false` otherwise.
 */
export async function exists(id: number): Promise<boolean> {
  return (await prisma.customer.count({ where: { id } })) != 0;
}

/**
 * Determines whether or not customer is VIP.
 * @param id Identifier of a customer.
 * @returns `true` if customer is VIP; `false` otherwise.
 */
export async function isVip(id: number): Promise<boolean> {
  // Customer does not exist in external service, thus not VIP.
  if (!(await fetch(`https://jsonplaceholder.typicode.com/users/${id}`))) return false;

  return id % 2 != 0;
}
