import * as React from 'react'
import { PortWidget } from 'storm-react-diagrams'

export class DiamonNodeWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getSVGInnerHTML = text => {
    return (
      <React.Fragment>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g id="Artboard" transform="translate(-70.000000, -73.000000)">
            <g id="Group" transform="translate(70.000000, 73.000000)">
              <rect
                id="Rectangle"
                stroke="#4A4A4A"
                strokeWidth="3"
                fill="#7ED321"
                fillRule="nonzero"
                x="1.5"
                y="1.5"
                width="253"
                height="159"
                rx="8"
              />
              <rect
                id="Rectangle-2"
                stroke="#979797"
                fill="#F5A623"
                fillRule="nonzero"
                x="22.5"
                y="62.5"
                width="210"
                height="76"
              />
              <path
                d="M1.5,43.5 L254.5,43.5"
                id="Line"
                stroke="#4A4A4A"
                strokeWidth="3"
                strokeLinecap="square"
                fillRule="nonzero"
              />
              <text
                id="Placeholder"
                fontFamily="SanFranciscoDisplay-Regular, San Francisco Display"
                fontSize="12"
                fontWeight="normal"
                fill="#000000"
              >
                <tspan x="97" y="104">
                  {text}
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          width: this.props.node.width,
          height: this.props.node.height,
        }}
      >
        <svg width={this.props.node.width} height={this.props.node.height}>
          {this.getSVGInnerHTML(this.props.node.text)}
        </svg>

        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            left: this.props.node.width / 2 - 8,
            top: -8,
          }}
        >
          <PortWidget name="top" node={this.props.node} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            left: this.props.node.width - 8,
            top: this.props.node.height / 2 - 8,
          }}
        >
          <PortWidget name="right" node={this.props.node} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            left: this.props.node.width / 2 - 8,
            top: this.props.node.height - 8,
          }}
        >
          <PortWidget name="bottom" node={this.props.node} />
        </div>

        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            top: this.props.node.height / 2 - 8,
            left: -8,
          }}
        >
          <PortWidget name="left" node={this.props.node} />
        </div>
      </div>
    )
  }
}
DiamonNodeWidget.defaultProps = {
  node: {},
}
