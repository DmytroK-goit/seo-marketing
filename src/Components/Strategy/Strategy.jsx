import Image from "next/image";
import FrameUnd from "../../img/frame_und.png";

export const Strategy = () => {
  return (
    <div>
      <Image src={FrameUnd} alt="SEO marketing illustration" priority />
      <p>Strategy</p>;
    </div>
  );
};
