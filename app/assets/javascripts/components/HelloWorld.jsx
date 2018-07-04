class HelloWorld extends React.Component {
    render() {
        return (
            <div className="well">
                <h1>Hello, world!</h1>
                <hr/>
                <small>The current year is <Time />.</small>
            </div>
        )
    }
}
class Time extends React.Component {
    render() {
        return (
            new Date().getFullYear()
        )
    }
}