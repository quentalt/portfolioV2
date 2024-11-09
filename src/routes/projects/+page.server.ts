import {supabase} from "$lib/supabase";

export async function load() {
    const { data } = await supabase.from("Project").select();
    return {
        projects: data ?? [],
    };
}
