import { useEffect, useState } from "react"
import graphic from '../../graphic.png'
import market from "../../Printing.png"
import web from  "../../web.png"
import './slide.css'

const slideImages = [
    {
        title:"Professional graphic design",
        image: graphic,
    }, 
    {
        title:"Marketing, Advertising and Product promotion at its peak",
        image: market
    },
    {
        title: "Dynamic Web and Mobile app development",
        image:web

    }
 
]

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoplayInterval = 5000

     const nextSlide = () => {
        setCurrentIndex(prevState => 
        prevState === slideImages.length -1 ? 0 : prevState + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex(prevState => 
        prevState === slideImages.length -1 ? 0 : prevState - 1
        )
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, autoplayInterval);
        return () => clearInterval(intervalId);
      }, [autoplayInterval]);

    return (
        <div className="mainslide">
       <img className="slidemaincomponent" src={slideImages[currentIndex].image}
       />
        <h2 style={{ 
            color:'blue'
        }}>{slideImages[currentIndex].title}</h2>
      
        <div className='thumbholder'>
                <div className="thumbnail">1</div>
                <div className="thumbnail">2</div>
                <div className="thumbnail">3</div>
        </div>
        </div>
    )
}
export default Slide