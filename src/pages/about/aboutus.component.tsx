const AboutUs = () => {
    return (
        <div>
            <div style={{
                backgroundColor:'yellow',
                height:'40vh',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                width:'100%'
            }}><h1>About Us</h1>
            <ul style={{
                display:'flex',
                justifyContent:'space-around',
                 width:'100%'
            }}>
                <li> Who are we? </li>
                <li> What we do </li>
                <li> How we do? </li>
            </ul>
            </div>

            <div>
                <h2>Who are we?</h2>
                <p>We are Henovative Global africa a tech hub organization with specialization in web-devlopment, frontend and backend programing,
                    python programming, mobile application development, 2D game development, graphic design, animation and IOT devices</p>
            </div>
            
            <div>
            <h2>What we do</h2>
            <p> Our core service are web design and development, data analysis, 2D game development and mobile application</p>
            <p> We also render service in the field of marketing, Advertising, and product promotion, with all form printing service</p></div>

            <div>
            <h2>How we do</h2>
            <p> At the core of our services are intergrity, competence and consumers obesseion</p>
            <p>We dont just create that fancy and elegant design and services, we do it to touch our consumers mind, we it is consumer first</p></div>
        </div>
    )
}

export default AboutUs