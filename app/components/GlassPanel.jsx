'use client';

export default function GlassPanel({
  children,
  className = '',
  mode = 'dark', // 'dark' | 'light'
  as: Tag = 'div',
  ...props
}) {
  const panelClass = mode === 'light' ? 'glass-panel-light' : 'glass-panel-dark';

  return (
    <Tag className={`${panelClass} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
