import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from 'antd'
import style from './index.less';


export default class EllipsisTooltip extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    lineClampNum: PropTypes.number
  }

  render () {
    const { title, lineClampNum, width } = this.props
    return (
      <div className={style.ellipsisTooltip}>
        <Tooltip title={title} overlayClassName="tooltip">
          <span className={style.Tooltiptitle} style={{ width:width,WebkitLineClamp: lineClampNum||1 }}>
            {title}
          </span>
        </Tooltip>
      </div>
    )
  }
}