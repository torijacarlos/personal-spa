import Head from "next/head"
import Link from "next/link"
import styles from "./layout.module.scss"
import cs from "classnames"


export default function Layout({ title, children }) {
    return (
        <div>
            <Head>
                <title>{title} - Carlos Torija | AWS Solutions Architect working in Mexico's FinTech</title>
                <meta name="title" content="Carlos Torija | AWS Solutions Architect working in FinTech" />
                <meta name="description" content="Solutions architect currently focused in Mexico's fintech products" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://torijacarlos.com/" />
                <meta property="og:title" content="Carlos Torija | AWS Solutions Architect working in FinTech" />
                <meta property="og:description" content="Solutions architect currently focused in Mexico's fintech products" />
                <meta property="og:image" content="/torijacarlos-logo.png" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:url" content="https://torijacarlos.com/" />
                <meta property="twitter:title" content="Carlos Torija | AWS Solutions Architect working in FinTech" />
                <meta property="twitter:description" content="Solutions architect currently focused in Mexico's fintech products" />
                <meta property="twitter:image" content="https://torijacarlos.com/"></meta>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <div className={styles.header}>
                <img className={styles.logo} src="/torijacarlos-white.png"></img>
                <div className={styles.navigation}>
                    <Link href="/"><a>home</a></Link>
                    <Link href="/resume"><a>resume</a></Link>
                </div>
            </div>
            <div className={cs({
                [styles.content]: true,
                [styles.homeContent]: title == "Home"
                })}>
                {children}
            </div>
        </div>
    )
}