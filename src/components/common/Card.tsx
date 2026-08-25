// components/common/Card.tsx
// 앱 전역에서 사용하는 기본 카드 컴포넌트.
// Card     : index.css의 .studio-card 유틸리티를 적용한 래퍼.
//            className prop으로 border, glow 등의 추가 스타일 수신
// CardTitle: 카드 내부 제목 컴포넌트. 선택적으로 아이콘을 좌측에 표시

import React, { type ReactNode } from 'react';

/**
 * 공통 카드 래퍼
 * @param className - 추가 Tailwind 클래스 (border-t-4, glow-indigo 등)
 */
export function Card({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    // 컴포넌트별로 명확히 구분되게 그림자, 테두리, 배경색 강도 상향
    <div 
      className={`bg-white dark:bg-[#2d3a42] rounded-xl border-0 shadow-[0_1px_2px_rgba(28,43,51,0.1)] p-4 md:p-6 transition-shadow hover:shadow-[0_4px_16px_rgba(28,43,51,0.12)] ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * 카드 내부 제목 컴포넌트
 * @param icon      - 제목 왼쪽에 표시할 아이콘 (optional)
 * @param className - 추가 Tailwind 클래스
 */
export function CardTitle({ children, className = '', icon }: { children: ReactNode; className?: string; icon?: ReactNode }) {
  return (
    <h2 className={`text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3 ${className}`}>
      {/* 아이콘이 있을 때만 렌더링, 배경 칩으로 감쌈 */}
      {icon && <span className="p-2 bg-[#F0F2F5] dark:bg-[#465A69] rounded-lg text-[#0064E0]">{icon}</span>}
      {children}
    </h2>
  );
}
