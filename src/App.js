
import './App.css';
import './button.css';
import React from 'react';
import { useState } from 'react';
import Modal from './components/modal';



function App(props) {
    const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">

      {/* <Modal isOpen={true}>
        This is Modal content
        <button onClick={()=> setModalIsOpen(false)}>Modal Open</button>
      </Modal> */}
      <Modal url="" onClose={() => {setModalOpen(false)}} visible={modalOpen} />
      <div class='p1'>
      <div class="hi">
        Manager KIWEE, <br/> Welcome!
      </div>
      <p className='yy'>Unapproved 2 | Approved 6 <br/> Completed Order 10</p>
      <div className="c1image">
            <img className="kiweebird" alt="Group 136" src="img/Group 136.png" />
      </div>
      </div>
      <div class='p2'>
        <div className='entire'>
        <div className='approved'>
          <div>
          <img className="approved" alt="Group 137" src="img/Group 137.png" />
          </div>
          <div className='ap1'>
          <img className="eta1" alt="Group 139" src="img/Group 139.png" />

          <div>
            <button className="modalb" onClick={() => {setModalOpen(true)}}>Food Ready</button>
           
           </div>         
         </div>

          <div className='ap2'>
          <img className="eta1" alt="Group 139" src="img/Group 139.png" />

          <button className='foodready' onClick={()=>alert("ACCEPT")}>Food ready</button> 

          </div>

          <div className='readytogo'>
          <img className="readytogo" alt="Group 119" src="img/Group 119.png" />

          <div className='ap3'>
          <img className="eta2" alt="Group 140" src="img/Group 140.png" />

          <button className='pickedup' onClick={()=>alert("ACCEPT")}>Picked Up</button> 

          </div>

          <div className='ap4'>
          <img className="eta2" alt="Group 140" src="img/Group 140.png" />

          <button className='pickedup' onClick={()=>alert("ACCEPT")}>Picked Up</button> 

          </div>
        </div>

        <div className='completed'>
          <img className="completed" alt="Group 123" src="img/Group 123.png" />

          <div className='ap3'>
          <img className="eta2" alt="Group 140" src="img/Group 140.png" />

          <button className='pickedup' onClick={()=>alert("ACCEPT")}>Picked Up</button> 

          </div>

          <div className='ap4'>
          <img className="eta2" alt="Group 140" src="img/Group 140.png" />

          <button className='pickedup' onClick={()=>alert("ACCEPT")}>Picked Up</button> 

          </div>
        </div>
        </div>
      </div>


      </div>
    </div>


   
  );
}

export default App;