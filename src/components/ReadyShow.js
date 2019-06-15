import React from 'react';
import { Spin } from 'antd';

/**
 * 加载完毕无错误才显示元素
 * 包裹使用
 * <ReadyShow loading={boolean} error={str || null} >
 *   <TestComponent />
 * </ReadyShow>
 */
const ReadyShow = ({ loading, error, loadingMessage = '正在加载...', errorMessage = '请求失败', children }) => {
  if (loading) {
    return <div className='loading-info'><Spin tip={loadingMessage} /></div>
  } else if (error) {
    return <p className='loading-info'>{errorMessage}， 错误信息：{error}</p>
  } else {
    return children;
  }
}

// 或者方法返回包裹好的组件
function addLoading(Component) {
  return ({ loading, error, ...rest }) => {
    return (
      <ReadyShow loading={loading} error={error} >
        <Component {...rest} />
      </ReadyShow>
    );
  }
}

export { ReadyShow, addLoading };
