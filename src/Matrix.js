import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell className="cell" value={val} />)
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

const defaultPattern = {
values:
  [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00' ]
  ]
}

Matrix.defaultProps = defaultPattern
