import { PUBLIC_READONLY_HYGRAPH_CONTENT_API } from '$env/static/public';
import { request, gql } from 'graphql-request';

export type post = {
	title: string;
	uploadDate: string;
	content: string;
	slug?: string;
	tags?: string[];
};

export type cover = {
	artist: string;
	song: string;
	youtubeID: string;
	content: string;
	uploadDate: string;
	type: string;
	slug: string;
	version: number | undefined;
};

type getPostsRes = { posts: post[] };
export const getPosts = async () => {
	const query = gql`
		query getPosts {
			# apparently only 10 posts will show up by default
			posts(orderBy: uploadDate_DESC, first: 10000) {
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

type getCoversRes = { covers: cover[] };
export const getCovers = async () => {
	const query = gql`
		query getCovers {
			covers(orderBy: uploadDate_DESC, first: 10000) {
				artist
				song
				type
				uploadDate
				slug
				version
			}
		}
	`;

	const { covers } = (await request(PUBLIC_READONLY_HYGRAPH_CONTENT_API, query)) as getCoversRes;

	return covers;
};

type getCoverFromSlugRes = { cover: cover };
export const getCoverFromSlug = async (slug: string) => {
	const query = gql`
		query getCoverFromSlug {
			cover(where: { slug: "${slug}" }) {
				artist
				song
				youtubeID
				content
				uploadDate
				type
				version
			}
		}
	`;

	const { cover } = (await request(
		PUBLIC_READONLY_HYGRAPH_CONTENT_API,
		query
	)) as getCoverFromSlugRes;

	return cover;
};
