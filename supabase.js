import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://xblelhmjgtbobuuntyhq.supabase.co";
const supabaseKey = "sb_publishable_SPTU7w-HXUQi3pD09uc7fA_bo2_hGxg";

export const supabase = createClient(supabaseUrl, supabaseKey);
