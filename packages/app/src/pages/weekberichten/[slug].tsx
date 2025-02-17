import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Box } from '~/components/base';
import { EditorialDetail } from '~/components/editorial-detail';
import { Layout } from '~/domain/layout/layout';
import { getClient, getImageSrc } from '~/lib/sanity';
import {
	createGetStaticProps,
	StaticProps,
} from '~/static-props/create-get-static-props';
import {
	createGetContent,
	getLastGeneratedDate,
} from '~/static-props/get-data';
import { Block, Editorial, RichContentBlock } from '~/types/cms';
import { assert } from '~/utils/assert';

const editorialsQuery = `*[_type == 'editorial'] {"slug":slug.current}`;

export async function getStaticPaths() {
	const editorialData = await (await getClient()).fetch(editorialsQuery);

	/**
	 * getStaticPaths needs explicit locale routes to function properly...
	 */
	const paths = editorialData.flatMap((editorial: { slug: string }) => [
		{
			params: { slug: editorial.slug },
			locale: 'en',
		},
		{
			params: { slug: editorial.slug },
			locale: 'nl',
		},
	]);

	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export const getStaticProps = createGetStaticProps(
	getLastGeneratedDate,
	createGetContent<Editorial>((context) => {
		const { locale } = context;

		assert(context.params?.slug, 'Slug required to retrieve article');
		return `
      *[_type == 'editorial' && slug.current == '${context.params.slug}'][0]{
        ...,
        "cover": {
          ...cover,
          "${locale}": [
            ...cover.${locale}[]
          ]
        },  
        "intro": {
          ...intro,
          "${locale}": [
            ...intro.${locale}[]
          ]
        },
        "content": {
          "_type": content._type,
          "${locale}": [
            ...content.${locale}[]
            {
              _type != 'dashboardChart' && _type != 'dashboardKpi' => {
                ...
              },
              _type == 'dashboardChart' || _type == 'dashboardKpi' => {
                ...*[_id == ^._ref][0]
              }
            }  
          ]
        }
      }
    `;
	})
);

export default function EditorialDetailPage(
	props: StaticProps<typeof getStaticProps>
) {
	const { content, lastGenerated } = props;
	const { cover } = props.content;
	const { asset } = cover;
	const { locale = 'nl' } = useRouter();

	const imgPath = getImageSrc(asset, 1200);

	const metadata = {
		title: getTitle(props.content.title, locale),
		description: toPlainText(props.content.intro),
		openGraphImage: imgPath,
		twitterImage: imgPath,
	};

	const breadcrumbsData = useMemo(
		() => ({ [props.content.slug.current]: props.content.title }),
		[props.content.slug, props.content.title]
	);

	return (
		<Layout
			breadcrumbsData={breadcrumbsData}
			lastGenerated={lastGenerated}
			{...metadata}
		>
			<Box backgroundColor="white">
				<EditorialDetail editorial={content} />
			</Box>
		</Layout>
	);
}

function getTitle(title: string, locale: string) {
	const suffix =
		locale === 'nl'
			? 'Dashboard Coronavirus | Rijksoverheid.nl'
			: 'Dashboard Coronavirus | Government.nl';

	return `${title} | ${suffix}`;
}

function toPlainText(blocks: RichContentBlock[] | Block | Block[] | null) {
	if (!blocks) return '';

	return (
		(Array.isArray(blocks) ? blocks : [blocks])
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== 'block' || !block.children) {
					return '';
				}
				// loop through the children spans, and join the
				// text strings
				return block.children
					.map((child) => (child as any).text)
					.join('');
			})
			// join the paragraphs leaving split by two line breaks
			.join('\n\n')
	);
}
