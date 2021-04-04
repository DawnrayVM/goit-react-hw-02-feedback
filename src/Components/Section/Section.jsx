import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        padding: '0px 15px',
        margin: {
            right: 'auto',
            left: 'auto',
        },
    },
});

const Section = ({ title, children }) => {
    const classes = useStyles();
    return (
        title && (
            <section className={classes.container}>
                <h1>{title}</h1>
                {children}
            </section>
        )
    );
};

export default Section;
