import trav from '../images/301721925_4934471576656292_6815219307392506908_n.jpg';
import june from '../images/IMG_0252.jpg';
import tom from '../images/meeeee.jpg';

function Team(){
    return(
        <div>
            <h2 style= {{fontWeight: 'bolder'}}>Meet the Team!</h2>
        <div className="Team">
            <div className="Travis">
                <h4>Travis Harrington</h4>
                <img src={trav} alt="" className='Trav'/>
                <p className='Bio'>Travis is the lead artist developing the launch designs for the X's and O's of Tic Tac Boom; the first of many future artist collaborations for the project.</p>
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
        </div>
        </div>
    )
}

export default Team;