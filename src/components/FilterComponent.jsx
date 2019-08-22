import React from 'react'
import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';

const StaticSelect = () => {
    return <Select name="input" value="option1" className='filter-component'>
        <Option value="option1" label="Popular" className='filter-value' />
        <Option value="option2" label="Fresh"  className='filter-value' />
    </Select>
}

export default class FilterComponent extends React.PureComponent {
    renderOptions = (options) => {
        return options.map((option, index) => {
            return <Option key={`${option}_${index}`} value={`${option}_${index}`} label={option} className='filter-value'/>
        })
    }

  render() {
    const {language, genre} = this.props;

    return (
      <div className='filter-container'>
          <StaticSelect/>
          <Select className='filter-component'>{this.renderOptions(language)}</Select>
          <Select className='filter-component'>{this.renderOptions(genre)}</Select>
      </div>
    )
  }
}

