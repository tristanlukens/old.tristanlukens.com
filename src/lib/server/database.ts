import * as matter from 'gray-matter';

export const getContentList = async () => {
	// the content.txt file contains a format like the following (mind the blank lines):

	// cover:
	// [return-seperated covers]
	//
	// post:
	// [return-seperated posts]
	//

	// it's the output of `ls`'ing the cover/ and post/ dirs :)
	// what I'm doing here, is first fetching it, then seperating it into an array and
	// removing the blank lines. then, if trying to find covers, returm a slice that starts
	// at one element after the cover: element (so I'm skipping the cover element itself)
	// until I come across the post: element. if I'm trying to find posts, I start at
	// post: (and skipping over it) and returning the rest of the array. after that,
	// I remove all the file extensions and like magic, there's a list of all your covers or posts!
	//
	// I will admit that the code could be cleaner

	const res = await fetch(
		`https://raw.githubusercontent.com/tristanlukens/site-content/main/content.txt`
	);

	const list = (await res.text()).split('\n').filter((str) => str != '');

	return {
		covers: list
			.slice(list.indexOf('cover:') + 1, list.indexOf('post:'))
			.map((str) => str.replace('.md', '')),
		posts: list.slice(list.indexOf('post:') + 1).map((str) => str.replace('.md', ''))
	};
};

export const getContentData = async (slug: string) => {
	const list = await getContentList();
	let type: 'post' | 'cover' = 'post';
	if (list.covers.includes(slug)) type = 'cover';

	const res = await fetch(
		`https://raw.githubusercontent.com/tristanlukens/site-content/main/${type}/${slug}.md`
	);
	const text = await res.text();

	const { content, data } = matter.default(text);

	return { content, data };
};
