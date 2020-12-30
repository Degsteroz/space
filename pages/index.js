import Head from 'next/head'
import ContentWrapper from '../components/ContentWrapper'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
               <ContentWrapper/>
            </main>

            <footer>
                <a
                    href="https://t.me/Degster_oz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Degster0z
                </a>
            </footer>

            <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          overflow-y: hidden;
        }

        main {
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          bottom: 0;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: beige;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
