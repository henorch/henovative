import './footer.css'

import facebook from '../../component/community/facebook.png'
import instagram from '../../component/community/instagram.jpeg';
import X_im from '../../component/community/x.png';
import youtube from '../../component/community/youtube.png'

const Footer = () => {
    return(
        <div className="maincontainer">
            <div className="subcontainer">
                <form>
                     <table className='table'>
                        <th style={{
                            backgroundColor:'white',
                            color:'black'
                        }}>CONTACT US</th>
                        <tr className='tbrow'>
                            <td>name</td>
                            <td><input className='inputfield' placeholder='enter your name'/></td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td><input className='inputfield' placeholder='enter your name'/></td>
                        </tr>
                        <tr>
                            <td>Message</td>
                            <td><textarea className='textinput' placeholder='enter your name'></textarea></td>
                        </tr>
                    </table>
                    <button style={{
                        width:'50%',
                        height: '40px',
                        alignSelf:'left'
                    }}>SUBMIT</button>
                </form>
            </div>
            <div className="subcontainer"></div>
            <div className="subcontainer"> 
                     <div className='community'>
            <h4>our Community</h4>
            <img className="com_icon" src={facebook}/>
            <img className="com_icon" src={instagram}/>
            <img className="com_icon" src={X_im}/>
            <img className="com_icon" src={youtube}/>
        </div> 
        <h5>CALL US: 07033407608 0R 09127723112</h5>
            </div>
        </div>
    )
}

export default Footer