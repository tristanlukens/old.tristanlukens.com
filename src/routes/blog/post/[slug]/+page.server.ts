import { getPostFromSlug } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await getPostFromSlug(params.slug);
	return { post };
}) satisfies PageServerLoad;
