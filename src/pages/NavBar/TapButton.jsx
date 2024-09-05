
function TapButton( {children,onSelect}) {
    
  return (
    <>
        <button onClick={onSelect}>{children}</button>
    </>
  )
}

export default TapButton