import React from 'react';
import dynamic from 'next/dynamic';

// Spline 컴포넌트를 동적으로 import합니다.
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // 서버 사이드 렌더링을 비활성화합니다.
  loading: () => <p>Loading 3D model...</p>
});

const IndexPage = () => {
  return (
    <div>
      <h1>ACC Academy Demo</h1>
      <h2>바보바보바보바보</h2>
      <div style={{ width: '100%', height: '500px' }}>
        <Spline scene="https://prod.spline.design/eeyIm5Acs8LdQQiX/scene.splinecode" />
      </div>
    </div>
  );
};

export default IndexPage;
