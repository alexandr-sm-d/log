import React, {memo, useEffect} from 'react'
import {connect, useSelector} from "react-redux";

const Info = memo(({info: {title}}) => {
    useEffect(() => console.log('render Info'))

    return (
        <div>
            <hr/>
            Info about app: {title}
        </div>
    )
})

// const getInfoSelector = state => state.fetchStatus.info
//
// const mapStateToProps = state => ({
//     // info: state.fetchStatus.info
//     // info: state
//     info: getInfoSelector(state)
// })

// export default connect(mapStateToProps, null)(Info)
export default Info