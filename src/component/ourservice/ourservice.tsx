import './ourservice.css'
import { FC } from 'react'
import Logo  from '../../graphic.png'

const OurService = [
    {
        id:1,
        service: "Professional Graphic Design",
        imgbg: require('../../graphic.png')
    },
    {
        id:2,
        service:"Dynamic Web and Mobile Application development",
        imgbg: require('../../web.png')
    },
    {
        id:3,
        service:'Marketing Advertising and product promotioning Service',
        imgbg: require('../../market2.png')
    }
]

type servicePropType = {
    id: Number,
    service: String,
    imgbg: String
}

interface serviceProps {
    serviced: servicePropType
}

const ServiceRender: FC<serviceProps> = ({serviced}) => {
    const { id, service, imgbg } = serviced
    return (
        <div className="innerservice" style={{
            backgroundImage: `url(${imgbg}`,
            backgroundSize:'cover',
            }}>
            <h2 style={{
                textShadow:'2px',
                padding:'2px',
                backgroundColor:'white'
            }}>{service}</h2>
        </div>
    )
}
function OurServices(){
    return(
        <div className="mainservice">
            <h2>OUR SERVICES</h2>
            <div className='servicecontainer'>
            {OurService.map(service => 
                <ServiceRender serviced={service}/>
            )}
        </div>
        </div>
    )
}

export default OurServices