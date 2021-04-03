import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOption from './FeedbackOption';
import Statistics from './Statistics';
import Section from './Section';

class Feedback extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
        initialTotal: 0,
        initialPositivePercentage: 0,
    };

    static propTypes = {
        initialGood: PropTypes.number,
        initialNeutral: PropTypes.number,
        initialBad: PropTypes.number,
        initialTotal: PropTypes.number,
        initialPositivePercentage: PropTypes.number,
    };

    static counts = {
        total: 0,
        positivePercentage: 0,
    };

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
        total: this.props.initialTotal,
        positivePercentage: this.props.initialPositivePercentage,
    };

    handleIncrement = e => {
        const name = e.target.name;
        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
        this.countTotal();
        this.countPositivePercentage();
    };

    countTotal() {
        this.setState(prevState => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad,
            };
        });
    }

    countPositivePercentage() {
        this.setState(prevState => {
            return {
                positivePercentage: Number(
                    (
                        ((prevState.good + prevState.neutral) * 100) /
                        prevState.total
                    ).toFixed(2),
                ),
            };
        });
    }
    render() {
        return (
            <Section title="Feedback Widget">
                <FeedbackOption
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.handleIncrement}
                />
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.state.total}
                    positivePercentage={this.state.positivePercentage}
                />
            </Section>
        );
    }
}

export default Feedback;
