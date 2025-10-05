interface ConnectorIllustrationProps {
  variant: 'circle-line' | 'line-circle' | 'line-only';
}

const ConnectorIllustration = ({ variant }: ConnectorIllustrationProps) => {
  const greenColor = '#93BD60';
  
  return (
    <div className="flex flex-col items-center justify-center my-12">
      {variant === 'line-circle' && (
        <>
          <div 
            className="w-1 h-24 animate-fade-in" 
            style={{ backgroundColor: greenColor }}
          />
          <div 
            className="w-6 h-6 rounded-full animate-scale-in" 
            style={{ backgroundColor: greenColor }}
          />
        </>
      )}
      
      {variant === 'circle-line' && (
        <>
          <div 
            className="w-6 h-6 rounded-full animate-scale-in" 
            style={{ backgroundColor: greenColor }}
          />
          <div 
            className="w-1 h-24 animate-fade-in" 
            style={{ backgroundColor: greenColor }}
          />
        </>
      )}
      
      {variant === 'line-only' && (
        <div 
          className="w-1 h-24 animate-fade-in" 
          style={{ backgroundColor: greenColor }}
        />
      )}
    </div>
  );
};

export default ConnectorIllustration;
