interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function BaseButton(props: Props) {
  const { children, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg flex items-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
