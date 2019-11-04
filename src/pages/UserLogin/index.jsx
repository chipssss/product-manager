import React, { useState, useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Input, Button, Checkbox, Message } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import FoundationSymbol from '@icedesign/foundation-symbol';
import styles from './index.module.scss';
import {apiLogin} from "@/api/user";

function UserLogin(props) {
  const [formValue, setFormValue] = useState({
    username: '',
    password: '',
    checkbox: false,
  });
  const formEl = useRef(null);

  const formChange = (value) => {
    setFormValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formEl.current.validateAll((errors, values) => {
      if (errors) {
        console.log('errors', errors);
        return;
      }
      apiLogin(formValue).then(res => {
        Message.success('登录成功');
        props.history.push('/dashboard');
      }, err => Message.error('登陆失败，'+err));
    });
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>登 录</h4>
      <IceFormBinderWrapper
        value={formValue}
        onChange={formChange}
        ref={formEl}
      >
        <div className={styles.formItems}>
          <div className={styles.formItem}>
            <FoundationSymbol type="person" size="small" className={styles.inputIcon} />
            <IceFormBinder name="username" required message="必填">
              <Input
                maxLength={20}
                placeholder="用户名"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="username" />
          </div>

          <div className={styles.formItem}>
            <FoundationSymbol type="lock" size="small" className={styles.inputIcon} />
            <IceFormBinder name="password" required message="必填">
              <Input
                htmlType="password"
                placeholder="密码"
                className={styles.inputCol}
              />
            </IceFormBinder>
            <IceFormError name="password" />
          </div>

          <div className={styles.footer}>
            <Button
              type="primary"
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
              登 录
            </Button>
          </div>
        </div>
      </IceFormBinderWrapper>
    </div>
  );
}

export default withRouter(UserLogin);
