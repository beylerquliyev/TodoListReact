import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import style from "./Card.module.css"
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export function Card({title,descp,Delete,id,index,Edit}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalTitle,setModalTitle]=useState("")
    const [modalDesc,setModalDesc]=useState("")
    
 function newTitle(d){
        console.log(d.target.value);
         setModalTitle(d.target.value)
    }
function newDesc(d){
    setModalDesc(d.target.value)

}

    useEffect(()=>{
        setModalDesc(descp)
        setModalTitle(title)

    },[])

   

function silen(){
    Delete(id)
   ;
   
}
function edit(){
    setShow(false);
    Edit({index:index,newTitle:modalTitle,newDesc:modalDesc})

}


    return(
        <div className={style.FullDiv}>
            <div className={style.text}>
                <h1 className={style.title}>
                    {title}

                </h1>
                <h1 className={style.descp} >
                    {descp}


                </h1>

            </div>
            <div className={style.icons} >
                <FaEdit onClick={handleShow } size={40} color="blue" />
                <MdDelete onClick={silen} size={40} color="blue"/>



            </div>
            <>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Todo</Modal.Title>
        </Modal.Header>
       <div className={style.ModalDiv}>
       <Form.Control onChange={newTitle} value={modalTitle} type="text" placeholder="Normal text" />
        <Form.Control onChange={newDesc}  value={modalDesc} type="text" placeholder="Normal text" />

        </div>
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>

        </div>
        
    )
}