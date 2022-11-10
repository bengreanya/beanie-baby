const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// export async functions that fetch data
export async function getBabies(BabyType) {
    let query = client.from('beanie_babies').select('*').order('title').limit(100);

    // if there is a Baby type given to the function, filter the response by type
    if (BabyType) {
        query = query.eq('Baby_Type', BabyType);
    }
    const response = await query;

    return response;
}

export async function getTypes() {
    const response = await client.from('Baby_types').select('*');
    return response;
}
