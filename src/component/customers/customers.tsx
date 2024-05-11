import { FC } from "react"
import './customers.css'


const HappyPeople = [ 
    {
        id:1,
        picture:"",
        name: "Tom Rock",
        review: "Henovative global, a brand that gives you comfort and assurance of satisfaction, no doubt about it i guess they are heading somewhere"
    },
    {
        id:2,
        picture:"",
        name: "Olabisoye Ademola",
        review: "If the deal must go through and with the peace of mind think of Henovative global"
    },
    {
        id:3,
        picture:"",
        name:"Olaitan Sarah",
        review: " Modern business requires another set of skills and idea, and this company has it all"
    },
   
]


type customerPropsType = {
    id: Number,
    picture: String,
    name: String,
    review: String
}

interface customerProps {
    customer: customerPropsType
}

const EachPerson: FC<customerProps> = ({customer}) => {
    const { name, picture, review} = customer;
    return(
        <div className="eachmain">
             <div className="image"/>
             <div className="contholder">
                <h5>{name}</h5>
                <p>{review}</p>
            </div>
        </div>
    )

}



const Customer = () => {
    return(
        <>
            <h4>Happy clients, customers & People</h4>
        <div className="customermain">  
            {HappyPeople.map(customed => <EachPerson customer={customed}/>)}
        </div>
        </>
    )
}
export default Customer