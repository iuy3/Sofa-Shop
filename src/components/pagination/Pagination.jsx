import React from 'react';
import styles from './Pagination.module.scss';

function Pagination() {
  return (
    <div className={styles.pagination}>
      <div className={styles.viewMore}>Посмотреть ещё</div>
      <div className={styles.pages}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>...</li>
          <li>10</li>
        </ul>

        <svg
          height='512px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 512 512'
          width='512px'
        >
          <path d='M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0  c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4  c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z' />
        </svg>
      </div>
    </div>
  );
}

export default Pagination;
