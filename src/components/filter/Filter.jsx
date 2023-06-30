import React from 'react';
import styles from './Filter.module.scss';

function Filter() {
  return (
    <div className={styles.filter}>
      <h1>Диваны</h1>

      <div className={styles.sortings}>
        <div className={styles.filters}>
          <ul>
            <li>Все фильтры</li>
            <li>Цена</li>
            <li>Размер</li>
            <li>Тип ткани</li>
            <li>Наполнение</li>
            <li>Модель дивана</li>
          </ul>
        </div>

        <div className={styles.sortBy}>
          <div className={styles.byMechanism}>
            <span>Механизм</span>
            <svg
              width={20}
              height={20}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z' />
              </g>
            </svg>
          </div>
          <div className={styles.byPopular}>
            <span>Самые популярные</span>
            <svg
              width={20}
              height={20}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g>
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z' />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
