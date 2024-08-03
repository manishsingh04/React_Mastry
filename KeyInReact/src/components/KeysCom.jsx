

function KeysCom({ users }) {

    KeysCom.propTypes = users
    return (
        <>
            <ul>
                {users.map((items) => (
                    <li key={items.id}>{items.id} {items.name} {items.age}</li>

                ))}
            </ul>
        </>
    )
}

export default KeysCom
