import { staticPath } from '@src/lib/$path'
import { GA_ID } from '@src/lib/gtag'
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
        <link
          as={'image'}
          href={staticPath.images.mainVisual1_jpg}
          rel={'preload'}
        />
        <link href={staticPath.favicon_ico} rel={'icon'} />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
