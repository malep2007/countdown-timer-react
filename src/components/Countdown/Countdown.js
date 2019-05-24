import React, { Component } from 'react'
import moment from 'moment'
import SVGCircle from '../SVGCircle/SVGCircle';
import './Countdown.css'

class Countdown extends Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormate } = this.props;
            const then = moment(timeTillDate, timeFormate);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss')

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    mapNumber(number, in_min, in_max, out_min, out_max) {
        return (
            ((number - in_min) * (out_max - out_min)) / (in_max - in_min)
        );
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        const daysRadius = this.mapNumber(days, 30, 0, 0, 360);
        const hoursRadius = this.mapNumber(hours, 24, 0, 0, 360)
        const minutesRadius = this.mapNumber(minutes, 60, 0, 0, 360)
        const secondsRadius = this.mapNumber(seconds, 60, 0, 0, 360)

        if (!seconds) {
            return null;
        }
        return (
            <div className="Countdown">
                <h1>Countdown</h1>
                <div className="countdown-wrapper">
                    {days && (
                        <div className="countdown-item">
                            <SVGCircle radius={daysRadius} />
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            <SVGCircle radius={hoursRadius} />
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Countdown