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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                
                Sed blandit mi sed commodo vulputate. Aliquam nunc ipsum, feugiat id mollis sed, pretium sed erat.
                Nulla vulputate dapibus semper. Integer nec magna libero. Aliquam blandit lorem sit amet elit placerat laoreet. Ut in imperdiet quam. Morbi posuere non est eget bibendum. Nunc ac nibh sed massa blandit semper sit amet vitae lacus.
            </div>
        </Layout>
    )
}

