import dotenv from "dotenv";

dotenv.config();

const URL_WHITELIST_CSV = process.env.URL_WHITELIST_CSV;
const NODE_ENV = process.env.NODE_ENV;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_SERVICE_KEY) {
  throw new Error("process.env.SUPABASE_SERVICE_KEY is undefined");
}

if (!SUPABASE_KEY) {
  throw new Error("process.env.SUPABASE_KEY is undefined");
}

if (!SUPABASE_URL) {
  throw new Error("process.env.SUPABASE_URL is undefined");
}

if (!URL_WHITELIST_CSV) {
  throw new Error("process.env.URL_WHITELIST_CSV is undefined");
}

export default {
  URL_WHITELIST_CSV,
  SUPABASE_KEY,
  SUPABASE_URL,
  NODE_ENV,
  SUPABASE_SERVICE_KEY,
};
