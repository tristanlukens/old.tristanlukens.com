import { getCovers } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const covers = await getCovers();
	return { covers };
}) satisfies PageServerLoad;
