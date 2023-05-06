import { PUBLIC_READONLY_HYGRAPH_CONTENT_API } from '$env/static/public';
import { request, gql } from 'graphql-request';

export type post = {
	title: string;
	uploadDate: string;
	content: string;
	slug?: string;
	tags?: string[];
};

type getPostsRes = { posts: post[] };
export const getPosts = async () => {
	const query = gql`
		query getPosts {
			posts {
				title
				uploadDate
				slug
				tags
			}
		}
	`;

	const { posts } = (await request(PUBLIC_READONLY_HYGRAPH_CONTENT_API, query)) as getPostsRes;

	return posts;
};

type getPostFromSlugRes = { post: post };
export const getPostFromSlug = async (slug: string) => {
	const query = gql`
		query getPostFromSlug {
			post(where: { slug: "${slug}" }) {
				title
				uploadDate
				content
				tags
			}
		}
	`;

	const { post } = (await request(
		PUBLIC_READONLY_HYGRAPH_CONTENT_API,
		query
	)) as getPostFromSlugRes;

	return post;
};
