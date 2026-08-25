import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyle =
    'rounded-md text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 outline-none active:scale-[.98]';

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle =
        'bg-[#0064E0] text-white shadow-sm hover:bg-[#0058C4]';
      break;
    case 'danger':
      variantStyle = 'bg-[#FA383E] text-white shadow-sm hover:bg-[#d92f35]';
      break;
    case 'outline':
      variantStyle =
        'bg-transparent border border-[#0064E0] text-[#0064E0] hover:bg-blue-50 dark:hover:bg-blue-950/30';
      break;
    case 'secondary':
      variantStyle =
        'bg-[#E4E6EB] dark:bg-[#2D3A42] text-[#1C2B33] dark:text-white hover:bg-[#D8DADF]';
      break;
  }

  return (
    <button className={`${baseStyle} ${variantStyle} py-2.5 px-4 ${className}`} {...props}>
      {children}
    </button>
  );
}
