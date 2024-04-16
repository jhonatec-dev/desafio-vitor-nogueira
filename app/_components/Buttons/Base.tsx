interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function BaseButton(props: Props) {
  const { children, className, onClick, ...otherProps } = props;
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
