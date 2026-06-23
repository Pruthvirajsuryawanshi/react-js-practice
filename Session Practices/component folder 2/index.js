const Welcome = (props) => {
    const { name, greeting } = props;
    return (
        <div className="container">
            <h1>{greeting}, {name}</h1>
        </div>
    )

}
ReactDOM.render(
    <div>
        <Welcome name="Pruthvi" greeting="Hello" />
        <Welcome name="Sushant" greeting="Hey" />
    </div>,
    document.getElementById('root')
)