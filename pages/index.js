import Head from 'next/head'
import React, {
    useCallback,
    useState,
} from 'react'

import ContentWrapper from '../components/ContentWrapper'
import NewContentWrapper from '../components/NewContentWrapper'
import VersionToggle from '../components/VersionToggle'
import Links from '../components/Links'

console.info('%cAND WHAT ARE YOU LOOKING AT?', 'font-size: 30px')
export default function Home() {

    const [isNew, setIsNew] = useState(true)
    const component = useCallback(() => {

        return isNew ? <NewContentWrapper/> : <ContentWrapper/>
    }, [isNew])

    return (
        <div className="container">
            <Head>
                <title>degsteroz.space</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap"
                  rel="stylesheet"/>
            </Head>

            <main>
                {
                    component()
                }
            </main>

            <footer className={`${isNew ? 'new' : ''}`}>
                <span>Powered by Degster0z</span>
                <span>{new Date().getFullYear()}</span>
                <Links />
                <VersionToggle
                    value={isNew}
                    changeState={setIsNew}
                />
            </footer>

            <style jsx>
                {`
                  .container {
                    display: flex;
                    flex-direction: column;
                    overflow-y: hidden;
                  }
                  body {
                    margin: 0;
                  }

                  header {
                    display: flex;
                    position: absolute;
                    background-color: black;
                    opacity: 0.1;
                    color: aliceblue;
                    width: 100%;
                    z-index: 4000000;
                  }

                  footer {
                    width: 100%;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    bottom: 15px;
                    color: bisque;
                  }

                  footer.new {
                    height: auto;
                    padding: 10px 0;
                    background-color: #1a1a1a;
                    position: relative;
                    bottom: 0;
                  }

                  @media only screen and (max-width: 1024px) {
                    footer {
                      position: relative;
                      background-color: black;
                    }
                  }

                  a {
                    color: bisque;
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
                `}
            </style>

            <style jsx global>
                {`
                    html,
                    body {
                      padding: 0;
                      margin: 0;
                      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }
                    body::-webkit-scrollbar {
                      width: 5px;
                      height: 8px;
                      background-color: #aaa;
                    }
                    
                    body::-webkit-scrollbar-thumb {
                        background: #000;
                    }
            
                    * {
                      box-sizing: border-box;
                    }
                `}
            </style>
        </div>
    )
}
