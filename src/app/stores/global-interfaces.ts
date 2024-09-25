export interface ApiResponse<T> {
  message: string;
  data: T;
}
export interface GlobalEntityAttributes {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}
