import React from 'react'

import { fieldChange } from '../../utils/fieldChange'
import { fieldBlur } from '../../utils/fieldBlur'

const ConfiguratorTextarea = ({ message, setMessage, confField }) => {
  return (
    <div className="configurator__textarea-wrapper">
      <label className="configurator__textarea-label" htmlFor="configurator-message">{confField.confLabel}</label>
      <div className="configurator__textarea-inner">
        <textarea 
          className="configurator__textarea" 
          name="message" 
          autoComplete="off"
          id="configurator-message"
          value={message}
          onChange={e => {
            fieldChange(e)
            setMessage(e.currentTarget.value)
          }}
          onBlur={fieldBlur}
        />
        <span 
          className={`configurator__textarea-placeholder ${message ? 'focused' : ''}`}
        >
          {confField.confPlaceholder}
        </span>
      </div>
    </div>
  )
}

export default ConfiguratorTextarea