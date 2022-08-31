import {useState, useEffect} from 'react'
import trav from '../../images/301721925_4934471576656292_6815219307392506908_n.jpg';
import june from '../../images/IMG_0252.jpg';
import tom from '../../images/meeeee.jpg';

function Team(){

    const [width, setWindowWidth] = useState(window.innerWidth)
    useEffect(() => { 
 
      updateDimensions();
 
      window.addEventListener('resize', updateDimensions);
      return () => 
        window.removeEventListener('resize',updateDimensions);
     }, [])
     const updateDimensions = () => {
       const width = window.innerWidth
       setWindowWidth(width)
     }

    return(
        <div>
            <h2 style= {{fontWeight: 'bolder'}}>Meet the Team!</h2>
        {width <= 500 ? <><div className="Team" style={{flexDirection: 'column', alignItems: 'center'}}>
            <div className="Thomas">
                <h4>Thomas Langford</h4>
                <img src={tom} alt="" className='Tom'/>
                <p className='Bio'>Co-creator and head developer of the official website. Successful graduate of Per Scholas Software Engineering Bootcamp and serial entrepreneur.</p>
            </div>
            <div className="Emmanuel">
                <h4>Emmanuel Damour</h4>
                <img src={june} alt="" className='June'/>
                <p className='Bio'>Creator and Lead developer of Tic Tac Boom! Full-time developer working in various languages and tech stacks.</p>
            </div>
            <div className="Travis">
                <h4>Travis Harrington</h4>
                <img src={trav} alt="" className='Trav'/>
                <p className='Bio'>Lead artist developing the launch designs of the X's and O's; the first of many artist collaborations for this project.</p>
            </div>
        </div></> : <><div className="Team">
            <div className="Travis">
                <h4>Travis Harrington</h4>
                <img src={trav} alt="" className='Trav'/>
                <p className='Bio'>Lead artist developing the launch designs of the X's and O's; the first of many artist collaborations for this project.</p>
            </div>
            <div className="Thomas">
                <h4>Thomas Langford</h4>
                <img src={tom} alt="" className='Tom'/>
                <p className='Bio'>Co-creator and head developer of the official website. Successful graduate of Per Scholas Software Engineering Bootcamp and serial entrepreneur.</p>
            </div>
            <div className="Emmanuel">
                <h4>Emmanuel Damour</h4>
                <img src={june} alt="" className='June'/>
                <p className='Bio'>Creator and Lead developer of Tic Tac Boom! Full-time developer working in various languages and tech stacks.</p>
            </div>
        </div></>}
        </div>
    )
}

export default Team;