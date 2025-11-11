interface SponsorDisplayProps {
  icons: {
    icon: string;
  }[];
  iconSizePx: number;
}

const SponsorDisplay = ({ icons, iconSizePx }: SponsorDisplayProps) => {
  return (
    <div className="flex flex-wrap h-fit gap-15 justify-center p-10">
      {icons.map(({ icon }) => {
        return (
          <img
            key={`${icon}-1`}
            className={`company-icon justify-self-center self-center object-contain`}
            style={{
              width: `${iconSizePx}px`,
            }}
            src={icon}
          />
        );
      })}
    </div>
  );
};

export default SponsorDisplay;
