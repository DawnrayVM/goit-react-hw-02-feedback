import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOption from './Components/FeedbackOption';
import Statistics from './Components/Statistics';
import Section from './Components/Section';

class App extends Component {
    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    static propTypes = {
        initialGood: PropTypes.number,
        initialNeutral: PropTypes.number,
        initialBad: PropTypes.number,
    };

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    };

    handleIncrement = e => {
        const name = e.target.name;
        this.setState(prevState => ({ [name]: prevState[name] + 1 }));
    };

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
                />
            </Section>
        );
    }
}

export default App;
