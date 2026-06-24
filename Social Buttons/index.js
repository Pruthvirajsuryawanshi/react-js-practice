const Button = props => {
    //  Write your code here.
    return (
        <div className="container">
            <button className='button'>{props.name}</button>
        </div>
    )
}

const element = (
    //  Write your code here.
    <div className='main-container'>
        <h1>Social Buttons</h1>
        <div className="button-container">
            <Button name='Like' />
            <Button name='Share' />
            <Button name='Comment' />
        </div>

    </div>
)

ReactDOM.render(element, document.getElementById('root'))
