import Layout from "../components/layout"
import styles from "./index.module.scss"


export default function Home() {
    return (
        <Layout title="Home">
            <div className={styles.introContainer}>
                <div className={styles.intro}>
                    <div>
                        <div className={styles.imgWrapper}>
                            <img src="https://www.gravatar.com/avatar/519dec78138790ffdd962ec02007ae95?s=250"></img>
                        </div> 
                    </div>
                    <div className={styles.description}>
                        <p></p>
                        <p>Solutions architect, building products in <span className="textAccent">fintech</span></p>
                        <p>I value the <span className="textAccent">balance</span> needed to know when good is enough, 
                        the <span className="textAccent">wisdom</span> to let go of things out of my control, 
                        and the <span className="textAccent">wonder</span> brought by a sense of discovery and learning</p>
                        <p>Musician, <span className="textAccent">artist</span>, gamer, otaku, cook and baker</p>
                    </div>
                </div>
                <div className={styles.certs}>
                    <a href="https://www.linkedin.com/in/torijacarlos/">
                        <img src="/aws-solarchitect-associate-2020.png"></img>
                        <img src="/aws-developer-associate-2020.png"></img>
                        <img src="/aws-sysopadmin-associate-2020.png"></img>
                    </a>
                </div>
                <div className={styles.social}>
                    <a href="https://twitter.com/torijacarlos"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </Layout>
    )
}


