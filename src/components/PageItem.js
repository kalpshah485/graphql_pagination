import React from 'react'

function PageItem({ page_info, value, refetchPageData }) {
  return (
    <button onClick={() => refetchPageData(value)} disabled={value === page_info.prev + 1}>
      {value}
    </button>
  )
}

export default PageItem