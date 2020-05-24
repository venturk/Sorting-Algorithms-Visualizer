import React from 'react';
import './SortingVisualizer.css';

const NUMBER_OF_ARRAY_BARS = 125;

export default class SortingVisualizer extends React.Component {
    constructor(properties) {
        super(properties);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.initializeArray();
    }

    initializeArray() {
        const array = [];

        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; ++i) {
            array.push(this.randomNumberInRange(50, 750));
        }

        this.setState({ array });
    }

    randomNumberInRange(minimum, maximum) {
        return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {
                    array.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                            {'.'}
                        </div>
                    ))
                }
            </div>
        );
    }
}