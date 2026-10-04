const { createClient } = require("@supabase/supabase-js");

const supabaseUrl =
  process.env.SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://xyzcompany.supabase.co";

const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummykey";

async function fetchData() {
  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log("Fetching data from Supabase...");
  const { data, error } = await supabase.from("reviews").select("*");

  if (error) {
    console.error("Error fetching data:", error.message);
    process.exit(1);
  }

  console.log("Data from Supabase:", data);
}

fetchData();

