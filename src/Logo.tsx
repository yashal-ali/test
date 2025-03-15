import Image from "next/image";
import { useSearchParams } from "next/navigation";


const logoBasePath = "/assets/img/home1/logo/";

const Logo = () => {
  const searchParams = useSearchParams();
  const logoNumber = searchParams.get("logoNumber") || "1";

  return (
    <Image
      src={`${logoBasePath}Logo-v${logoNumber}.png`}
      alt={`Logo ${logoNumber}`}
      width={100}
      height={50}
    />
  );
};

export default Logo;
