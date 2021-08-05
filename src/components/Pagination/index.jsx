import React from 'react'
import ReactJSPagination from 'react-js-pagination'

import styles from './index.module.css'

function Pagination({ onChange, currentPage }) {
  return (
    <ReactJSPagination
      innerClass={styles.container}
      itemClass={styles.item}
      disabledClass={styles.itemDisabled}
      activeClass={styles.itemActive}
      linkClass={styles.link}
      activeLinkClass={styles.linkActive}
      activePage={currentPage}
      itemsCountPerPage={10}
      totalItemsCount={30}
      pageRangeDisplayed={10}
      onChange={onChange}
    />
  )
}

export default Pagination
