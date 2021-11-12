import { Person } from "./app/interfaces/person";

export const getIdFromUrl = <T extends Person>(url: T["url"]) => url.replace(/\D/g, "");
