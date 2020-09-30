import Layout from "../components/layout"
import styles from "./index.module.scss"


export default function Home() {
    return (
        <Layout title="Home">
            <div>
                <div className={styles.imgWrapper}>
                <img src="https://www.gravatar.com/avatar/519dec78138790ffdd962ec02007ae95?s=250"></img>
                </div> 
            </div>
            <div className={styles.description}>
                <p></p>
                <p>Developer and <span className="textAccent">architect</span> with strong opinions open to debate</p>
                <p>I value the <span className="textAccent">balance</span> needed to know when good is enough, 
                the <span className="textAccent">wisdom</span> to let go of things out of my control, 
                and the <span className="textAccent">wonder</span> brought by a sense of discovery and learning</p>
                <p>Artist, gamer, <span className="textAccent">weeb</span>, cook and baker</p>
            </div>
        </Layout>
    )
}



// <p>My definition of success entails being self-sufficient</p> 