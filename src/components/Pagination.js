import React from 'react'
import PageItem from './PageItem'

function Pagination({ page_info, refetchPageData }) {
  return (
    <div className="pagination">
      <button onClick={() => refetchPageData(page_info.prev)} disabled={!page_info.prev}>
        prev
      </button>
      {
        Array.from({length: page_info.pages}).map((_item, index) => <PageItem key={index+1} page_info={page_info} refetchPageData={refetchPageData} value={index+1}/>)
      }
      <button onClick={() => refetchPageData(page_info.next)} disabled={!page_info.next}>
        next
      </button>
    </div>
  )
}

export default Pagination