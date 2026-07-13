import { createClient } from "@supabase/supabase-js";


const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY;


console.log(
  "SERVICE KEY CHECK:",
  serviceKey
    ? "読み込みOK"
    : "読み込み失敗"
);



export const supabaseAdmin =
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    serviceKey!,
    {
      auth:{
        autoRefreshToken:false,
        persistSession:false,
      },
    }
  );