const SectionDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full flex justify-center py-2 ${className}`}>
      <div className="w-24 h-px bg-border" />
    </div>
  );
};

export default SectionDivider;
