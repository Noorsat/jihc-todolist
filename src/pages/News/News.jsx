import { useState } from 'react';
import styles from './News.module.css';
import { Input, Spin, notification } from 'antd';
import axios from 'axios';
import { NewsCard } from '../../components/NewsCard/NewsCard';


export const News = () => {
    const [searchInput, setSearchInput] = useState("");
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [firstLoading, setFirstLoading] = useState(false);

    const searchNewsHandler = (e) => {
        e.preventDefault();

        if (searchInput.length > 0){
            setLoading(true);
            axios.get(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=9ad10a376ac341f2aff26f304d19e182`).then((res) => {
                setNews(res.data.articles);
                setFirstLoading(true);
                setLoading(false)
            })
        }else{
            notification["warning"]({
                message: "You need print something"
            })
        }
        
    }

    return (
        <div className={styles.news}>
            {
                loading && (
                    <div className={styles.loading}>
                        <Spin size='large' />
                    </div>
                )
            }
            <div className={styles.news__wrapper}>
                <div className={styles.news__wrapper_input}>
                    <form onSubmit={(e) => searchNewsHandler(e)}>        
                        <Input placeholder='Search...' style={{ width: 450}} value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                    </form>         
                </div>
            </div>
            <div className={styles.news__items}>
               {
                    (news.length > 0) ? news.map(n => (
                        <NewsCard
                            author={n.author}
                            description={n.description}
                            date={n.publishedAt}
                            title={n.title}
                            url={n.url}
                            image={n.urlToImage}
                        />
                    )) : 
                    firstLoading ? 
                    <div className={styles.news__items_empty}>
                        In this term we don't have news
                    </div>
                    : ""
                }  
            </div>
        </div>
    )
}
