import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href={
            'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap'
          }
          rel={'stylesheet'}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
