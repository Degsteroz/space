import Head from 'next/head'
import ContentWrapper from '../components/ContentWrapper'
import Links from "../components/Contacts";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>degsteroz.space</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <ContentWrapper />
            </main>

            <footer>
                <span>Powered by Degster0z</span>
                <span>{new Date().getFullYear()}</span>
                <Links />
            </footer>

            <style jsx>{`
          @media only screen and (max-width:480px) {
            #scroll {
              display: none;
            }
          }
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: fixed;
          bottom: 0;
          color: bisque;
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
