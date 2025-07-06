import ApiResponse from "./ApiResponse";

interface NewReservationResponse extends ApiResponse {
  reservationId?: number;
}

export default NewReservationResponse;
