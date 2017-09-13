import React from 'react';
import { Redirect } from 'react-router-dom'
import { Button, Form, Input, Alert } from 'antd';
import './LoginView.less';
import logo from '../../logo.svg';

const FormItem = Form.Item;

const LoginView = ({
    location,
    isRequestLogin,
    isLogin,
    error,
    onLogin,
    form: {
        getFieldDecorator,
        validateFieldsAndScroll,
  }
}) => {
    const handleOk = () => {
        validateFieldsAndScroll((errors, values) => {
            if (errors) {
                return
            }
            onLogin(values);
        })
    }

    if (isLogin) {
        return (<Redirect to={{ pathname: '/' }} />)
    }

    return (
        <div className='form'>
            <div className='logo'>
                <img alt={'logo'} src={logo} />
                <span>UTMS</span>
            </div>
            <form>
                <FormItem hasFeedback>
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: "用户名必须要填写"
                            },
                        ],
                    })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
                </FormItem>
                <FormItem hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: "密码必须要填写"
                            },
                        ],
                    })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
                </FormItem>
                <FormItem>
                    <Button type="primary" size="large" onClick={handleOk} loading={isRequestLogin}>登录</Button>
                </FormItem>

                 {/*error &&
                    <Alert style={{marginTop: '20px'}}
                        message="登录失败"
                        description={error}
                        type="error"
                        showIcon
                    />*/}
            </form>
        </div>
    );
};

export default Form.create()(LoginView);