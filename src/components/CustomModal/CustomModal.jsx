import styles from './CustomModal.module.css';
import { Modal } from 'antd';
import { filters } from '../../filters';
import { useState } from 'react';

export const CustomModal = ( { title, open, onOk, onCancel } ) => {
    const [selectedFilter, setSelectedFilter] = useState({
        color:"",
        type:""
    });

    return (
        <Modal title={title} open={open} onOk={() => onOk(selectedFilter.color)} onCancel={onCancel}>
            <div className={styles.filter__items}>
            {
                filters.map(filter => (
                    <div className={`${selectedFilter.color == filter.color ? styles.filter__item_selected : styles.filter__item}`} onClick={() => setSelectedFilter(filter)}>
                        <div className={styles.filter__item_box} style={{background: filter.color}}>
                        </div>
                        <div className={styles.filter__item_type}>
                            {filter.type}
                        </div>
                    </div>
                ))
            }
            </div>
        </Modal>
    )
}
