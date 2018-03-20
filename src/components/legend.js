import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

let Legend = class Legend extends React.Component {

  static propTypes = {
    forms: PropTypes.array.isRequired
  };

  render() {
    const stops = this.props.forms;

    const renderLegendKeys = (stop, i) => {
      return (
        <div key={i} className='txt-s'>
          <p className='txt-h4'>{stop.data.name}</p>
          <p>{stop.data.description}</p>
          <hr className='txt-hr' />
        </div>
      );
    }

    return (
      <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax180">
        {stops.map(renderLegendKeys)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forms: state.forms
  };
}

Legend = connect(mapStateToProps)(Legend);

export default Legend;
