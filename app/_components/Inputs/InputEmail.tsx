
interface Props {
  value: string;
  onChange: (value: string) => void;
  endAdornment?: React.ReactNode;
  label: string;
  fullWidth?: boolean;
}

export default function InputEmail(props: Props) {
  const { value, onChange, endAdornment, label, fullWidth } = props;

  return <div className={`flex flex-col ${fullWidth ? "w-full" : ""}`}>
    <label className="text-sm text-gray-500">{label}</label>
    <div className="flex items-center">
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-2 border-gray-300 rounded-md w-full px-2 py-1"
      />
      {endAdornment && <div className="ml-2">{endAdornment}</div>}
    </div>
  </div>;
}
