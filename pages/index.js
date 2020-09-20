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
                <p>Driven to enable individual's <span className="textAccent">growth</span>,
                focused on mentoring engineering talent in <span className="textAccent">México</span></p>
                <p>Developer and <span className="textAccent">architect</span> with strong opinions open to debate</p>
                <p>Also an <span className="textAccent">otaku</span>, gamer, cook and baker</p>
                <p>values: balance, wisdom and wonder</p>
            </div>
        </Layout>
    )
}



// <p>My definition of success entails being self-sufficient</p> 