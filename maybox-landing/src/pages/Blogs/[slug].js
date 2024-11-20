import { client, urlFor } from '../../libs/client';

export default function Post({ post }) {
  const { title, body, mainImage, _createdAt } = post;

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-500">{new Date(_createdAt).toDateString()}</p>
      <img
        src={urlFor(mainImage).width(800).url()}
        alt={title}
        className="my-8"
      />
      <div>{/* Render rich text using Portable Text */}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "post"] { slug }`;
  const posts = await client.fetch(query);
  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug: params.slug });

  return { props: { post } };
}
