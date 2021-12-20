import PropTypes from 'prop-types'
import style from './FeedbackOptions.module.css'
import { memo } from 'react';
const FeedbackOptions = ({options, onClick}) => {
    const elements = options.map(option => 
    <button 
    key={option} 
    onClick={() => onClick(option)}
    className={style.btn}
    >
    {option}
    </button>);

    return (
        <div>
            {elements}
        </div>
    )
}

export default memo(FeedbackOptions);

FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
} 