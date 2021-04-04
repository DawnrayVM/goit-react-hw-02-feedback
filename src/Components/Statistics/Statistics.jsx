import { createUseStyles } from 'react-jss';
import Notification from '../Notification';

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

const Statistics = ({ good, neutral, bad }) => {
    const classes = useStyles();
    const msgStyle = { textAlign: 'center' };
    const countTotal = () => {
        return good + neutral + bad;
    };
    const countPositivePercentage = () => {
        return (((good + neutral) * 100) / countTotal()).toFixed(2);
    };
    return good || neutral || bad ? (
        <div className={classes.container}>
            <h2 style={msgStyle}>Statistics</h2>
            <span className="counter">Good: {good}</span>
            <span className="counter">Neutral: {neutral}</span>
            <span className="counter">Bad: {bad}</span>
            <span className="counter">Total: {countTotal()}</span>
            <span className="counter">
                {' '}
                Positive feedback: {countPositivePercentage()}%
            </span>
        </div>
    ) : (
        <div className={classes.container} style={msgStyle}>
            <Notification message="No feedback given" />
        </div>
    );
};

export default Statistics;
