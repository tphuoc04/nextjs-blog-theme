import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="description" content={`reallyreally`} />
      <meta name="description" content={`Really Really`} />
      <meta name="description" content={`reallymad`} />
      <meta name="description" content={`really mad`} />
      <meta name="description" content={`Really Mad`} />
      <meta name="description" content={`ReallyMad`} />
      <meta name="description" content={'vaxyPeuty'} />
      <meta name="description" content={'VaxyPeuty'} />
      <meta name="description" content={'vaxy peuty'} />
      <meta name="description" content={'vaxy Peuty'} />
      <meta name="description" content={`vaxypeuty`} />
      <meta property="og:title" content={title} />
      <meta property="og:title" content={title} />
      <link rel="icon" href="/images/reallymad.png" />
    </Head>
  );
}
