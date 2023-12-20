export type PostClockInRequest = {
  type: "start" | "end";
  day: string;
  time: string;
};
