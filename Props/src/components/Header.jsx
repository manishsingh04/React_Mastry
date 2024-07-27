

function Header({ first_name = "Ved ", last_name }) {
    Header.propTypes = first_name, last_name
    // props.first_name = "Rithvik"  //not allowed since props are immutable
    first_name = "Rithvik"  // here u are assisning local variable which is correct...it is correct within the function scope.
    //NOTE : Read Readme.md file -> for proper understandin..
    return (
        <>
            <h1>Header Component: {first_name} {last_name} </h1>

        </>
    )
}

export default Header