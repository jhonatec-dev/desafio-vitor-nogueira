import { RegisterOptions, useFormContext } from "react-hook-form";

interface Props {
  endAdornment?: React.ReactNode;
  label: string;
  fullWidth?: boolean;
  registerAs: string;
  registerOptions?: RegisterOptions;
  [key: string]: any;
}

export default function Input(props: Props) {
  const { fullWidth, endAdornment, label, registerAs, registerOptions } = props;
  const { register } = useFormContext();
  // console.log('otherPRops \n', otherProps)
  return (
    <div
      className={`input-container flex items-center transition ${
        fullWidth ? "w-full" : ""
      } bg-stone-600 rounded-2xl py-2 px-4`}
    >
      <div className='flex flex-col flex-grow'>
        <label className='text-xs text-gray-300 ml-2'>{label}</label>
        <input
          className='bg-transparent px-2 py-1'
          {...register(registerAs, registerOptions)}
          {...props}
        />
      </div>
      {endAdornment && <div className='ml-2'>{endAdornment}</div>}
    </div>
  );
}
