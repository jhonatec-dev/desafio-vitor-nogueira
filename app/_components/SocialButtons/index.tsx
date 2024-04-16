import Apple from "@mui/icons-material/Apple";
import Facebook from "@mui/icons-material/Facebook";
import Google from "@mui/icons-material/Google";
import BaseButton from "../Buttons/Base";

export default function SocialButtons() {
  return (
    <div className='flex flex-col gap-1'>
      <BaseButton>
        <>
          <Apple className='mr-1' />
          Continue com Apple
        </>
      </BaseButton>
      <BaseButton>
        <>
          <Facebook className='mr-1' />
          Continue com Facebook
        </>
      </BaseButton>
      <BaseButton>
        <>
          <Google className='mr-1' />
          Continue com Google
        </>
      </BaseButton>
    </div>
  );
}
