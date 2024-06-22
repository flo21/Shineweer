import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Filter.css';

function Filter () {
    return <div className="filter">
        <FontAwesomeIcon icon={faFilter} />
    </div>

}

export default Filter;