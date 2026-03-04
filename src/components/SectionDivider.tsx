interface SectionDividerProps {
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ flip = false, className = "" }: SectionDividerProps) => {
  return (
    <div className={`w-full h-px relative ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, hsla(340, 90%, 55%, 0.4) 20%, hsla(25, 100%, 55%, 0.5) 50%, hsla(42, 100%, 52%, 0.4) 80%, transparent 100%)',
          boxShadow: '0 0 15px hsla(340, 90%, 55%, 0.3), 0 0 30px hsla(25, 100%, 55%, 0.15)',
        }}
      />
    </div>
  );
};

export default SectionDivider;
