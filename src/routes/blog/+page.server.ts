import { getPosts } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const posts = await getPosts();
	return { posts };
}) satisfies PageServerLoad;
