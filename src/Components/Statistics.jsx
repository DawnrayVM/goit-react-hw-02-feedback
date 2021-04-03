import { createUseStyles } from 'react-jss';
import Notification from './Notification';

const useStyles = createUseStyles({
    container: {
        textAlign: 'start',
        width: 200,
        margin: {
            right: 'auto',
            left: 'auto',
            top: 10,
        },
        display: 'flex',
        flexDirection: 'column',
    },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const classes = useStyles();
    const msgStyle = { textAlign: 'center' };
    return good || neutral || bad ? (
        <div className={classes.container}>
            <h2 style={msgStyle}>Statistics</h2>
            <span className="counter">Good: {good}</span>
            <span className="counter">Neutral: {neutral}</span>
            <span className="counter">Bad: {bad}</span>
            <span className="counter">Total: {total}</span>
            <span className="counter">
                {' '}
                Positive feedback: {positivePercentage}%
            </span>
        </div>
    ) : (
        <div className={classes.container} style={msgStyle}>
            <Notification message="No feedback given" />
        </div>
    );
};

export default Statistics;
