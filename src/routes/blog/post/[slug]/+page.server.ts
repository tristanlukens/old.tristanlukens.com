import * as db from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	return {
		post: await db.getContent('post', params.slug)
	};
}) satisfies PageServerLoad;
