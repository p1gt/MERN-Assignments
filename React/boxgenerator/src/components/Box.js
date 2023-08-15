const Box = props => {
    const boxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: props.color,
    };
    
    return (
        <div style={boxStyle}/>
    );
};

export default Box;
