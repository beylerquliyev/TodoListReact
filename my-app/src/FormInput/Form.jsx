import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from "../FormInput/Form.module.css"
import { useEffect, useState } from 'react';
import {Card} from "../Card/Card"

export function Input(){
    const[title,SetTitle]=useState({title:"",desc:""})
   
    const[data,setData]=useState([])
    const[eror,setEror]=useState(false)
    function TitleInpt(e){
    SetTitle((prev)=>({...prev,title:e.target.value,id:Math.random()*new Date()}))

    }
    function DescInpt(e){
        SetTitle((prev)=>({...prev,desc:e.target.value}))

     
    }
    

    function pushData(){
        setEror((prev)=>false)
        if(title.title !==0&&title.desc.length !==0){
            
        setData((prev)=>[...prev,title])
        SetTitle((prev)=>({title:"",desc:"",id:""}))

        }
        else{
            setEror((prev)=>true)
        }
  
     



    }
    function Delete(d){
       let newData= data.filter((i)=>i.id!==d)
       setData((prev)=>[...newData])
      
    }
    function edit(e){ 
        let newData=[...data]

        newData[e.index].title=e.newTitle;
        newData[e.index].desc=e.newDesc;
        setData((prev)=>[...newData])


    }

    
   
    return(
        <div className={style.full}>
            <div className={style.InputsDiv} >
            <Form.Control value={title.title} onChange={TitleInpt} size="lg" type="text" placeholder="Title......" />
            <Form.Control value={title.desc} onChange={DescInpt} size="lg" type="text" placeholder="Description......" />
            </div>
            <div>
            <Button onClick={pushData} className={style.btn} variant="primary">Add </Button>{' '}
           {eror&& <h1 className={style.eror}>Please fill in all fields!!!</h1>}
            </div>
            
            <div className={style.CardsDiv}>
                {
                    data.map((i,index)=>{
                        return <Card Edit={edit} title={i.title} descp={i.desc} id={i.id} Delete={Delete} index={index} /> 
                    })
                }


           {/* <Card title="salama" descp="necesen" /> */}
             
            
            </div>
            

        </div>
    )
}