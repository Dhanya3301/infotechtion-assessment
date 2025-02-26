const Footer = () => {
  return (
    <footer className="bg-black h-18 px-4 bottom-0 w-full z-80">
      <div className="h-14 w-full flex flex-col sm:flex-row sm:justify-between justify-center items-center border-t border-zinc-200/20">
        <div className="w-full text-center md:text-left pb-2 md:pb-0">
          <p className="text-sm text-white text-center">
            &copy; {new Date().getFullYear()} Infotechtion. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
