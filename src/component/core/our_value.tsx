import { title } from "process";
import { FC } from "react";
import './core.css'

const coreInfo = [ 
    {
        title:'consumers obsession',
        text: 'Rather than competing for the little space, we focus on providing the unique service that make our customer happy and feel satisfied',
        id:1
    },
    {
        title:'Continuous Research and implementation',
        text: 'We have been consumed with the idea of being the first to discover, the first to identify and the first to implement, we believe in our ability to lead and let others follow',
        id: 2
    },
    {
        title:'Integrity and Competence',
        text:'Our service are base on competence and integrity, building trust for all our customer and client across the globe, we really want to stand out in all we do',
        id:3 
    },
    {
        title: 'Long-time thinking and involement',
        text: 'We think before and think ahead, our though is okay and paramount to us, believing we have the right skill to scale through all'
    }
    
]

type corePropType =  {
    title: String,
    text: String,
}

interface coreProps {
    coreval: corePropType
}

const RenderItem: FC<coreProps> = ({coreval}): JSX.Element => {
    const { title, text} = coreval
    return (
        <div className="innerdiv">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

function CoreValue(){
    return(
    <div className="main">
    <h2>OUR CORE VALUES</h2>
        <div className='corecontainer'>
            {coreInfo.map(core => 
                
                <RenderItem coreval={core}/>
            )}
        </div>
            </div>            
    )
}
export default CoreValue;