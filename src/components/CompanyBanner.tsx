interface BannerProps {
  icons: {
    icon: string;
  }[];
  goesLeft?: boolean;
}

const Banner = ({ icons, goesLeft = false }: BannerProps) => {
  return (
    <div
      className={`${
        goesLeft ? "swipeLeft" : "swipeRight"
      } banner-wrapper relative rounded-xl flex max-w-screen w-full mt-5 mb-10 mx-auto transition-color duration-300`}
    >
      <div className="absolute gradient-left-black h-full w-[200px] z-10"></div>
      <div className={`${goesLeft ? "swipeLeft" : "swipeRight"} wrapper py-3`}>
        <div className={`${goesLeft ? "swipeLeft" : "swipeRight"} icons`}>
          {icons.map(({ icon }) => (
            <img
              key={`${icon}-1`}
              className="company-icon shrink-0 w-[50px] mx-10 object-contain "
              src={icon}
            />
          ))}
        </div>
        <div className={`${goesLeft ? "swipeLeft" : "swipeRight"} icons`}>
          {icons.map(({ icon }) => (
            <img
              key={`${icon}-2`}
              className="company-icon shrink-0 w-[50px] mx-10 object-contain "
              src={icon}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 rotate-180 gradient-left-black h-full w-[200px] z-10"></div>
    </div>
  );
};

export default Banner;
