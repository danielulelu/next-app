import Head from 'next/head'


const Meta = ({ title, keywords, description }) => {
    return (
      <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta name='keywords' content={keywords} />
          <meta name='description' content={description} />
          <meta charset='utf-8' />
          <link rel="stylesheet" href="/favicon.ico" />
          <title>{title}</title>
      </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev News',
    keywords: 'web development, programming',
    description: 'Get the latest news in web dev'
}
export default Meta