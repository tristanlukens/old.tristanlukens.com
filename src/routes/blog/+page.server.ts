import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const list = await db.getContentList();
	return { list };
}) satisfies PageServerLoad;
