import Image from "next/image";
import fbImg from "../../assets/facebook.png";
import instagramImg from "../../assets/instagram.png";
import footerImg from "../../assets/logo-xl.png";
import twitterImg from "../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244d3fFF] px-12 pt-12 md:px-32 lg:px-60 lg:pt-20">
      <div className="mb-6 md:mb-10">
        <div className="flex justify-center items-center">
          <Image
            src={footerImg}
            alt="Footer Logo"
            height={61}
            max-width={412}
          />
        </div>
        <p className="text-white/90 mt-4 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="flex flex-col justify-center items-center mt-6">
          <p className="text-xl font-medium text-white text-center mb-4">
            Social Links
          </p>
          <div className="flex justify-center items-center gap-3">
            <div className="bg-white p-1.5 rounded-[100px] flex justify-center items-center">
              <Image src={fbImg} alt="Facebook" height={20} width={20} />
            </div>
            <div className="bg-white p-1.5 rounded-[100px] flex justify-center items-center">
              <Image
                src={instagramImg}
                alt="Instagram"
                height={20}
                width={20}
              />
            </div>
            <div className="bg-white p-1.5 rounded-[100px] flex justify-center items-center">
              <Image src={twitterImg} alt="Twitter" height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-[#1a8862FF] text-center md:text-left space-y-3 md:space-y-0 md:flex md:justify-between mb-8">
        <p className="text-[#fafafaFF]/70">
          © 2026 KeenKeeper. All rights reserved.
        </p>
        <div className="text-[#fafafaFF]/70 bg-transparent space-y-2 md:space-y-0 md:flex md:gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
