import React from 'react';
import Head from 'next/head';
import parseHTML from "html-react-parser";
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const client = axios.create({ baseURL: `https://shophamsterthainguyen.15w.xyz/graphql` });

client.interceptors.response.use(
	({ data }) => data,
	(error) => Promise.reject(error)
);

function graphQL(query: string, variables: Record<string, any>, options?: AxiosRequestConfig) {
	return client.post("/", { query, variables }, options);
}
export async function getPageBySlug(slug: string) {
	return graphQL(
		`query PageBySlug($slug: String!) {
		pageBy(uri: $slug) {
		  title
		  content(format: RENDERED)
		  slug
		}
	  }`,
		{ slug }
	);
}
export async function getPages(page: number, perPage: number) {
	return graphQL(
		`
	  query AllPages($size: Int!, $offset: Int!) {
		pages(where: {offsetPagination: { size: $size, offset: $offset }}) {
		  edges {
			node {
			  title
			  slug
			}
		  }
		  pageInfo {
			offsetPagination {
			  total
			}
		  }
		}
	  }
	`,
		{ offset: (page - 1) * perPage, size: perPage }
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	// Returns a list of { slug: string } objects, uses getPages underneath
	const pages = await getAllPages();

	return {
		paths: pages.map(({ slug }) => ({ params: { slug: slug.split("/") } })),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	if (!ctx.params || !ctx.params.slug) {
		return { notFound: true };
	}

	const {
		data: { pageBy: props },
	} = await getPageBySlug(ctx.params.slug.join("/"));

	return { props };
};

const Page = (page: PageProps) => (
	<>
		<Head>
			<title>{page.title}</title>
		</Head>
		<article>
			<header className={styles.header}>
				<h1 className={styles.title}>{page.title}</h1>
			</header>
			<div className={styles.content}>{parseHTML(page.content)}</div>
		</article>
	</>
);

export default Page;