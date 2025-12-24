export const motion = {
  div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
};

export const AnimatePresence = ({ children }: any) => children;