import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.headerTopLeft}>
          <span>
            Y <u>O</u> R C <u>O</u> M
          </span>
          <div className={styles.search}>
            <svg
              className={styles.searchIcon}
              height='512px'
              id='Layer_1'
              version='1.1'
              viewBox='0 0 512 512'
              width='512px'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M445,386.7l-84.8-85.9c13.8-24.1,21-50.9,21-77.9c0-87.6-71.2-158.9-158.6-158.9C135.2,64,64,135.3,64,222.9  c0,87.6,71.2,158.9,158.6,158.9c27.9,0,55.5-7.7,80.1-22.4l84.4,85.6c1.9,1.9,4.6,3.1,7.3,3.1c2.7,0,5.4-1.1,7.3-3.1l43.3-43.8  C449,397.1,449,390.7,445,386.7z M222.6,125.9c53.4,0,96.8,43.5,96.8,97c0,53.5-43.4,97-96.8,97c-53.4,0-96.8-43.5-96.8-97  C125.8,169.4,169.2,125.9,222.6,125.9z' />
            </svg>

            <input placeholder='найти мебель' />
          </div>
        </div>

        <div className={styles.headerTopRight}>
          <div className={styles.contact}>
            <u>Челябинск</u>
            <div>
              <span>+7 (900) 092-80-86</span>
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

          <div className={styles.icons}>
            <svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
              <title />
              <g id='about'>
                <path d='M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z' />
                <path d='M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z' />
              </g>
            </svg>

            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg>

            <svg
              data-name='Layer 1'
              id='Layer_1'
              viewBox='0 0 32 32'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M29.75,10.34A1,1,0,0,0,29,10H23v2h4.88L26.11,27H5.89L4.12,12H9V10H3a1,1,0,0,0-.75.34,1,1,0,0,0-.24.78l2,17A1,1,0,0,0,5,29H27a1,1,0,0,0,1-.88l2-17A1,1,0,0,0,29.75,10.34ZM19,10H13v2h6Z' />
              <path d='M21,16a1,1,0,0,1-1-1V9a4,4,0,0,0-8,0v6a1,1,0,0,1-2,0V9A6,6,0,0,1,22,9v6A1,1,0,0,1,21,16Z' />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.sort}>
        <ul>
          <li>Новинки</li>
          <li>Акции</li>
          <li>Диваны</li>
          <li>Кресла</li>
          <li>Кровати</li>
          <li>Стулья</li>
          <li>Столы</li>
          <li>Матрасы</li>
          <li>Пуфы</li>
        </ul>
      </div>

      <div className={styles.headerFooter}>
        <p>YORCOM</p>
        <p>/</p>
        <p>Диваны</p>
      </div>
    </div>
  );
}
