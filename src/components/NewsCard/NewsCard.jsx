import dayjs from 'dayjs';
import styles from './NewsCard.module.css';

export const NewsCard = (props) => {
  const { author, description, date, title, url, image } = props;

  const openNewTab = () => {
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <div className={styles.news__card} onClick={openNewTab}>
        <div className={styles.news__card_img}>
            <img src={image} alt={title} />
        </div>
        <div className={styles.news__card_title}>
            { title }
        </div>
        <div className={styles.news__card_description}>
            { description }
        </div>
        <div className={styles.news__card_author}>
            { author }
        </div>
        <div className={styles.news__card_date}>
            { dayjs(date).format("dddd, MMMM D, YYYY h:mm A") }
        </div>
    </div>
  )
}
