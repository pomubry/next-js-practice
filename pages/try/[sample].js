import Head from 'next/head';
import Layout from '../../components/layout';

export function getStaticProps({ params }) {
  let name = params.sample;
  return {
    props: {
      name,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { sample: 'Ayumu' } }, { params: { sample: 'Setsuna' } }],
    fallback: true,
  };
}

export default function Sample({ name }) {
  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <h1>Hello {name}</h1>
    </Layout>
  );
}
