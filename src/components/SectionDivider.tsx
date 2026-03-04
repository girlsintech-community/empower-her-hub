interface SectionDividerProps {
  variant?: "wave" | "curve";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "wave", flip = false, className = "" }: SectionDividerProps) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      {variant === "wave" ? (
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
          <path
            d="M0 30C240 50 480 10 720 30C960 50 1200 10 1440 30V60H0V30Z"
            className="fill-background"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[30px] sm:h-[40px]" preserveAspectRatio="none">
          <path
            d="M0 40C360 0 1080 0 1440 40V40H0V40Z"
            className="fill-background"
          />
        </svg>
      )}
    </div>
  );
};

export default SectionDivider;
