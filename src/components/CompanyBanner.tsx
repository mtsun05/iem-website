interface BannerProps {
  icons: {
    icon: string;
  }[];
  goesLeft?: boolean;
}

const Banner = ({ icons, goesLeft = false }: BannerProps) => {
  return (
    <div className="banner-wrapper rounded-xl flex max-w-screen w-full mx-auto transition-color duration-300">
      <div className="absolute gradient-left-black h-full w-[200px] z-10"></div>
      <div className="wrapper flex py-5">
        <div className="icons flex items-center">
          {icons.map(({ icon }) => (
            <img
              key={`${icon}-1`}
              className="company-icon shrink-0 size-18 mx-10 object-contain"
              src={icon}
            />
          ))}
        </div>
        <div className="icons flex items-center">
          {icons.map(({ icon }) => (
            <img
              key={`${icon}-2`}
              className="company-icon shrink-0 size-18 mx-10 object-contain"
              src={icon}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 rotate-180 gradient-left-black h-full w-[200px] z-10"></div>
    </div>
  );
};

export default Banner;
