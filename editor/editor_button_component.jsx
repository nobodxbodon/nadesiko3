import 'date-utils'
import React from 'react'
import PropTypes from 'prop-types'

export default function EditorButtonComponent (props) {
  return (
    <div className="buttons">
      <button onClick={() => {
        try {
          // なでしこの関数をカスタマイズ
          props.nako3.setFunc('表示', props.onInformationChanged)

          props.nako3.run(props.code)
        } catch (e) {
          props.onErrorChanged(e)
        }
      }} className="default_button">
        実行
      </button>
      <button onClick={props.onReset} className="default_button">クリア</button>
      <button onClick={() => {
        try {
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(new Blob([props.nako3.compile(props.code)]))
          link.download = 'nako3_' + new Date().toFormat('YYYYMMDDHH24MISS') + '.js'
          link.click()
        } catch (e) {
          props.onErrorChanged(e)
        }
      }}>
        ↓
      </button>
    </div>
  )
}

EditorButtonComponent.propTypes = {
  code: PropTypes.string.isRequired,
  onInformationChanged: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onErrorChanged: PropTypes.func.isRequired,
  nako3: PropTypes.object.isRequired
}
