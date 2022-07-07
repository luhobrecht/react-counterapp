import { Fragment } from "react"
import PropTypes from "prop-types"

export  function FirstApp ({title, subTitle}) {
    return (
    <Fragment>  
    <h1>{title}</h1>
    <p>{subTitle}</p>
    </Fragment>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}