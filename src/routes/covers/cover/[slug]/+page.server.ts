import { getCoverFromSlug } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const cover = await getCoverFromSlug(params.slug);
	return { cover };
}) satisfies PageServerLoad;
