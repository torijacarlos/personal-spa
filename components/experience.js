import styles from "./experience.module.scss"
import cs from "classnames"

const months = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
]

const dateFormat = (date) => {
    if (!date) {
        return "now"
    }
    return months[date.getMonth()] + " " + date.getFullYear()
}

const elapsedLabel = (endDate, startDate) => {
    endDate = endDate? endDate: new Date();
    const milisecToMonth = 1000*60*60*24*30;
    let years = 0;
    let months = Math.ceil((endDate - startDate)/(milisecToMonth));
    if (Math.ceil(months / 12) > 1) {
        years = (months - (months % 12))/12
        months = months % 12
    }
    let label = years? `${years} year(s)`: '';
    label += months? ` ${months} month(s)`: ''
    return label.trim();
}

const getDateLabel = (endDate, startDate) => {
    const label = dateFormat(startDate) + " - " + dateFormat(endDate);
    const elapsed = elapsedLabel(endDate, startDate);

    return `${label} (${elapsed})`
}
 
export default function Experience({ 
    company, 
    companyLink,
    role, 
    startDate, 
    endDate, 
    description, 
    responsibilities
}) {
    return (
        <div className={styles.experience}>
            <div className={styles.expTitle}>
                {role} | <span className={cs({
                    [styles.[company+"Title"]]: true
                })}><a href={companyLink}>{company}</a></span>
            </div>
            <div className={styles.expDates}>
                {getDateLabel(endDate, startDate)}
            </div>
            <div className={styles.expDescription}>
                {description}
            </div>
            <div className={styles.expResps}>
                <ul>
                {responsibilities.map((e, i) => {
                    return <li key={i}>{e}</li>
                })}
                </ul>
            </div>
        </div>
    )
}