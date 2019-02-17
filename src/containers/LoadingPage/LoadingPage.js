import React, { PureComponent, PropTypes } from 'react';
import ProgressText from '../../components/ProgressText/ProgressText';
import { connect } from 'react-redux';
import { increment, nearlyComplete, complete, clear } from '../../redux/modules/loadingProgress';
import { Motion, spring } from 'react-motion';
import { Container, Headline, } from './LoadingPage.styles';

class LoadingPage extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    incrementProgress: PropTypes.func.isRequired,
    clearProgress: PropTypes.func.isRequired,
    completeProgress: PropTypes.func.isRequired,
    nearlyCompleteProgress: PropTypes.func.isRequired
  };

  _inc(_status) {
    if (_status >= 100) {
      return _status;
    }

    var rnd = 0;
    var stat = _status / 100;
    if (stat >= 0 && stat < 0.25) {
      // Start out between 3 - 6% increments
      rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
    } else if (stat >= 0.25 && stat < 0.65) {
      // increment between 0 - 3%
      rnd = (Math.random() * 3) / 100;
    } else if (stat >= 0.65 && stat < 0.9) {
      // increment between 0 - 2%
      rnd = (Math.random() * 2) / 100;
    } else if (stat >= 0.8 && stat < 0.89) {
      // finally, increment it .5 %
      rnd = 0.005;
    } else {
      // after 99%, don't increment:
      rnd = 0;
    }

    return rnd * 100;
  }

  componentDidMount() {
    this.startInc();
  }

  componentWillUnmount() {
    this.clear();
  }

  startInc() {
    this.interval = setInterval(() => {
      const { progress } = this.props;
      this.props.incrementProgress(this._inc(progress));
    }, 100);
  }

  clear() {
    if (this.interval) clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = nextProps;
    if (loading === this.props.loading) return;
    if (!loading) {
      this.clear();
      this.props.nearlyCompleteProgress();
      setTimeout(() => {
        this.props.completeProgress();
      }, 1000);
    } else {
      this.props.clearProgress();
      this.clear();
      this.startInc();
    }
  }

  render() {
    const { progress } = this.props;
    return (
      <Motion
        style={progress === 100 ?
          { opacity: spring(0) } :
          { opacity: 1 }}>
        {({ opacity }) =>
          <Container style={{
            opacity,
            pointerEvents: progress === 100 ? 'none' : 'initial'
          }}>
            <ProgressText progress={progress}>
              <Headline>Loading...</Headline>
            </ProgressText>
          </Container>
        }
      </Motion>
    );
  }
}

export default connect(
  (state) => ({ progress: state.loadingProgress.data }),
  {
    incrementProgress: increment,
    clearProgress: clear,
    completeProgress: complete,
    nearlyCompleteProgress: nearlyComplete
  }
)(LoadingPage);
