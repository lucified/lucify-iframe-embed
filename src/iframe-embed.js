
import React from 'react';
import iFrameResize from './iframe-resize';

export default class IFrameEmbed extends React.Component {

  static propTypes = {
    src: React.PropTypes.string
  }

  componentDidMount() {
    // TODO: use ReactDOM once we upgrade to React 0.14
    iFrameResize({log: false, checkOrigin: false},
      React.findDOMNode(this.refs.iframe));
  }

  render() {
    return (
     <div style={{lineHeight: 0}}>
      <iframe ref="iframe" src={this.props.src}
              width="100%" scrolling="no" frameBorder={0} />
     </div>
    );
  }

}

IFrameEmbed.prototype.displayName = 'IFrameEmbed';
