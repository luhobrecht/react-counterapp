import { Fragment } from "react"
import PropTypes from "prop-types"

export  function FirstApp ({title, subTitle,name}) {
    return (
    <Fragment>  
    <h1 data-testid="test-title">{title}</h1>
    <p>{subTitle}</p>
    <p>{subTitle}</p>
    <p>{name}</p>
    </Fragment>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: "Lucía Hobrecht",
    subTitle: 'No hay subtítulo',
    title: 'No hay título'
}