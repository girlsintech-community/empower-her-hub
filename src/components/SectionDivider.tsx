interface SectionDividerProps {
  variant?: "torn" | "jagged";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "torn", flip = false, className = "" }: SectionDividerProps) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
    >
      {variant === "torn" ? (
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[40px] sm:h-[60px]" preserveAspectRatio="none">
          <path
            d="M0 35L48 28L96 38L144 25L192 40L240 22L288 35L336 30L384 42L432 20L480 38L528 27L576 40L624 22L672 36L720 28L768 42L816 24L864 38L912 30L960 40L1008 22L1056 35L1104 28L1152 42L1200 25L1248 38L1296 30L1344 40L1392 26L1440 35V60H0V35Z"
            className="fill-background"
          />
          <path
            d="M0 35L48 28L96 38L144 25L192 40L240 22L288 35L336 30L384 42L432 20L480 38L528 27L576 40L624 22L672 36L720 28L768 42L816 24L864 38L912 30L960 40L1008 22L1056 35L1104 28L1152 42L1200 25L1248 38L1296 30L1344 40L1392 26L1440 35"
            stroke="url(#torn-gradient)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
          <defs>
            <linearGradient id="torn-gradient" x1="0" y1="30" x2="1440" y2="30">
              <stop offset="0%" stopColor="hsl(340, 90%, 55%)" />
              <stop offset="50%" stopColor="hsl(25, 100%, 55%)" />
              <stop offset="100%" stopColor="hsl(42, 100%, 52%)" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[35px] sm:h-[50px]" preserveAspectRatio="none">
          <path
            d="M0 30L60 38L120 22L180 42L240 18L300 35L360 28L420 45L480 15L540 38L600 25L660 42L720 20L780 40L840 28L900 38L960 22L1020 42L1080 30L1140 38L1200 18L1260 35L1320 25L1380 40L1440 30V50H0V30Z"
            className="fill-background"
          />
          <path
            d="M0 30L60 38L120 22L180 42L240 18L300 35L360 28L420 45L480 15L540 38L600 25L660 42L720 20L780 40L840 28L900 38L960 22L1020 42L1080 30L1140 38L1200 18L1260 35L1320 25L1380 40L1440 30"
            stroke="url(#jagged-gradient)"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
          <defs>
            <linearGradient id="jagged-gradient" x1="0" y1="30" x2="1440" y2="30">
              <stop offset="0%" stopColor="hsl(340, 90%, 55%)" />
              <stop offset="50%" stopColor="hsl(25, 100%, 55%)" />
              <stop offset="100%" stopColor="hsl(42, 100%, 52%)" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default SectionDivider;
