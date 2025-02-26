import { Heart, ShoppingCart, User } from "lucide-react";
import MaxWidthWrapper from "./MaxwidthWrapper";

const Navbar = () => {
  return (
    <div className="h-20 w-full">
      <MaxWidthWrapper>
        <div className="flex flex-row justify-between">
          <a href="https://www.infotechtion.com/" target="_blank">
            <div className="flex flex-row items-center justify-start gap-2 mt-4">
              <img
                className="h-12 w-12 md:h-15 md:w-15"
                src="/infotechtion-logo.png"
                alt="infotechtion logo"
              />
              <h1 className="text-white text-xl md:text-2xl font-sans">
                Infotechtion
              </h1>
            </div>
          </a>
          <div className="flex flex-row justify-start items-center md:gap-8 gap-4 mt-4">
            <Heart className="text-white h-5 w-5 md:h-8 md:w-8 cursor-pointer hover:bg-white/20 rounded-full md:p-1" />
            <ShoppingCart className="text-white h-5 w-5 md:h-8 md:w-8 cursor-pointer hover:bg-white/20 rounded-full md:p-1" />
            <User className="text-white h-5 w-5 md:h-8 md:w-8 cursor-pointer hover:bg-white/20 rounded-full md:p-1" />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
