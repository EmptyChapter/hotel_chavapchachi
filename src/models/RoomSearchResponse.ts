import { Room } from "@prisma/client";
import ApiResponse from "./ApiResponse";

/** Represents room search response. */
interface SearchResponse extends ApiResponse {
  /** Gets a collection of found rooms. */
  rooms?: Omit<Room, "id">[];
}

export default SearchResponse;
