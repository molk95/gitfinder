import React from 'react'
import PropTypes from 'prop-types';


const ReposItem = ({repo}) => {
    return (
        <div className="card" >
            <a href={repo.html_url}>
                {repo.name}
            </a>
        </div>
    )
}

ReposItem.prototype={
    repo:PropTypes.object.isRequired,
}
export default ReposItem
