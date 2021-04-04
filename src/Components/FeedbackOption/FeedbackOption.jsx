import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    title: {
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'flex-start',
        margin: {
            right: 'auto',
            left: 'auto',
        },
        '& button': {
            '&:not(:last-child)': { margin: { right: 10 } },
        },
    },
    feedbackButton: {
        display: 'inline-block',
        fontFamily: 'arial, sans-serif',
        fontSize: 10,
        fontWeight: 'bold',
        color: 'rgb(68, 68, 68)',
        textDecoration: 'none',
        userSelect: 'none',
        padding: '.2em 1.2em',
        outline: 'none',
        border: '1px solid rgba(0, 0, 0, .1)',
        borderRadius: 2,
        background: 'rgb(245, 245, 245) linear-gradient(#f4f4f4, #f1f1f1)',
        transition: 'all .218s ease 0s',
        '&:hover': {
            color: 'rgb(24, 24, 24)',
            border: '1px solid rgb(198, 198, 198)',
            background: '#f7f7f7 linear-gradient(#f7f7f7, #f1f1f1)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, .1)',
        },
        '&:active': {
            color: 'rgb(51,51,51)',
            border: '1px solid rgb(204,204,204)',
            background:
                'rgb(238, 238, 238) linear-gradient(rgb(238, 238, 238), rgb(224, 224, 224))',
            boxShadow: '0 1px 2px rgba(0, 0, 0, .1) inset',
        },
    },
});

const FeedbackOption = ({ onLeaveFeedback, options, children }) => {
    const classes = useStyles();
    const feedbackBtns = options.map(
        (option, idx) =>
            idx <= 2 && (
                <button
                    key={option}
                    type="button"
                    className={classes.feedbackButton}
                    onClick={onLeaveFeedback}
                    name={option}
                >
                    {option
                        .slice(0, 1)
                        .toUpperCase()
                        .concat(option.slice(1, option.length))}
                </button>
            ),
    );
    return (
        <>
            <h2 className={classes.title}>Please leave your feedback</h2>
            <section className={classes.container}>{feedbackBtns}</section>
            {children}
        </>
    );
};

export default FeedbackOption;
