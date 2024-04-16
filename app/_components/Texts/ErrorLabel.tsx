interface Props {
  children: React.ReactNode;
}

export default function ErrorLabel(props: Props) {
  const { children } = props;

  return <p className='text-xs text-red-400 ml-4'>{children}</p>;
}
