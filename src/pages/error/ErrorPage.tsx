import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="error__content">
        <Result
          status="404"
          title="404"
          subTitle="Xin lỗi, trang bạn đang tìm kiếm không tồn tại."
          extra={
            <Button type="primary" onClick={() => navigate('/')}>
              Về trang chủ
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default ErrorPage; 