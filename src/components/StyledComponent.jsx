function StyledComponent() {
    const style = {
      color: '#ff0000', 
      backgroundColor: '#0000ff', 
      width: '200px', 
      textAlign: 'center', 
    };
  
    return (
      <div style={style}>
        <p>Texto com estilo inline</p>
      </div>
    );
  }
  
export default StyledComponent;