const Box = props => {
    //  Write your code here.
    return (
        <div className={props.className}> {props.name}</div >
    )
}

const element = (
    //  Write your code here.
    <div className='main-container'>
        <h1>Boxes</h1>
        <div className='boxContainer'>
            <Box className='Box1' name='Box1' />
            <Box className='Box2' name='Box2' />
            <Box className='Box3' name='Box3' />
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById('root'))
