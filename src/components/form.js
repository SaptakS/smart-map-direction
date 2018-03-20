import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

let Form = class Form extends React.Component {

  static propTypes = {
    forms: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { forms } = this.props;

    const renderForms = (form) => {
      return (
        <div className='flex-parent flex-parent--space-between-main'>
          <label className='flex-child'>{form.name}</label>
          <input className='flex-child input input--border-green w240' onChange={(event) => this.props.onChange(event.target.value, event.target.name)} value={form.data.name} name={`${form.name}-name`} type="text" />
          <input className='flex-child input input--border-green w240' onChange={(event) => this.props.onChange(event.target.value, event.target.name)} value={form.data.description} name={`${form.name}-description`} type="text" />
          <input className='flex-child input input--border-green w240' onChange={(event) => this.props.onChange(event.target.value, event.target.name)} value={form.data.coordinates[0]} name={`${form.name}-long`} type="text" />
          <input className='flex-child input input--border-green w240' onChange={(event) => this.props.onChange(event.target.value, event.target.name)} value={form.data.coordinates[1]} name={`${form.name}-lat`} type="text" />
        </div>
      );
    }

    return (
      <div className="absolute top left ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1">
        {forms.map(renderForms)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    forms: state.forms
  };
}

Form = connect(mapStateToProps)(Form);

export default Form;
