import React from 'react'

const FooterComp = ({previousPage,currentPage,nextPage}) => {

    const openPreviousPage = () =>{
        currentPage(false)
        previousPage(true)
    }

    const openNextPage = () =>{
        currentPage(false)
        nextPage(true)
    }

  return (
    <div className="footerContainer">
        {previousPage ? (
            <div className="previousPageButton" onClick={openPreviousPage}>
                Go back
            </div>
        ) : (
            null
        )}
        {nextPage ? (
            <div className="nextPageButton" onClick={openNextPage}>
            Next
            </div>
        ) : (
            null
        )}
    </div>
  )
}

export default FooterComp