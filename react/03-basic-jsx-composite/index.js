const menuItems = [
    {
        "name": "An item",
        "icon": "An icon",
        "message": "Message"
    },
    {
        "name": "Another item",
        "icon": "Another icon",
        "message": "Second Message"
    }
]

function Menu(props) {
    return (
        <article>
            <header>
                <h3>{props.title}</h3>
            </header>
            <div className="items-wrapper">
                <ul>
                    {
                        props.items.map((value, index) => (
                            <MenuItem key={index} name={value.name} icon={value.icon} message={value.message}/>
                            // Show spread operator for props
                            //<MenuItem key={index} {...value} />
                            // Show DeepMenuItem for react fragments
                            // <DeepMenuItem key={index} {...value} />
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

function MenuItem({name, icon, message}) {
    return (
        <li>{message} - Name: {name} Icon: {icon}</li>
    )
}

function DeepMenuItem({name, icon, message}) {
    return (
        // Better alternative <>
        // <>
        <React.Fragment>
            <li>{message} - Name: {name} Icon: {icon}</li>
            <ul>
                <li>Name: {name}</li>
                <li>Icon: {icon}</li>
            </ul>
        </React.Fragment>
        //</>
    )
}


ReactDOM.render(
    <Menu items={menuItems} title="The Great Menu"/>,
    document.getElementById("example-2")
);