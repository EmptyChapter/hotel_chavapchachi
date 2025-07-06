/** Represents an API response. */
interface ApiResponse {
  /** Gets an indication of whether or not request was successful. */
  isSuccessful?: boolean;
  /** Gets an error message. */
  errorMessage?: string;
}

export default ApiResponse;
