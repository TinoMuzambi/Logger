export const BASE_URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

export const API_BASE_URL =
  "https://8000-tinomuzambi-logger-d5fmchdltiy.ws-eu64.gitpod.io";

export const PRODUCTS = [
  "Business Connect",
  "Business Internet Fibre",
  "Business Internet Mall",
  "Business Internet Wireless",
  "IP Connect",
  "LAN Connect",
  "Business Internet LTE",
  "SD-WAN",
];

/**
 * Appends a limit to the end of text and substrings to the specified limit.
 * @param text The text to add an ellips to.
 * @param limit The point at which the text is cut off.
 * @returns A string cut off at the limit and with an ellips appended to the end.
 */
export const elipsise = (text, limit) => text.substring(0, limit - 7) + "...";
