import React, { useEffect, useState } from 'react'
import useSetPrivateURI from '../hooks/UseSetPrivateURI';
import useSetActivePage from '../hooks/UseSetActivePage';
import styles from "./styles/AdminPanelHome.module.css"


const AdminPanelHomContent : React.FC = () => {
  let initRandBloc : number[] = [];
  
  const [isDisplay, setIsDisplay] = useState(true);
  const [randBlocs, setRandBloc] = useState(initRandBloc);

  useSetPrivateURI();  
  useSetActivePage('adminHome');

  const getTwoRandNumber = () : number[] => {
    let returnNumbers: number[] = [];

    
    for(let i : number = 1; i <=100; i++){
      const randNum = Math.floor(Math.random() * 4) + 1;

      if(returnNumbers.includes(randNum)){
        continue;
      }

      
      
      returnNumbers.push(randNum);

      if(returnNumbers.length == 2){
        break;
      }
    }

    return returnNumbers;
  }

  const handleHide = () => {
    console.log("you click hide")
    setIsDisplay(!isDisplay);

   

    
  }

  useEffect(() =>{
    console.log(`Is display is ${isDisplay}`)

    
    
    if(isDisplay == false){
      const numbers  = getTwoRandNumber();
      console.log(numbers);
      
      setRandBloc(numbers);
    }
    else if(isDisplay == true){
      setRandBloc([]);
    }


  },[isDisplay])

  

  

  

  



  return (
    <>
    <button onClick={handleHide} className='bg-slate-400 px-1'>Toggle Show</button>
    <div className={`${styles.mainPageContainer} `}>
        <div  className={` ${styles.pageBlock} ${isDisplay || !randBlocs.includes(1)  ? '': styles.pageBlockHide}  `}>block a</div>

        <div  className={` ${styles.pageBlock} ${isDisplay || !randBlocs.includes(2)  ? '': styles.pageBlockHide} `}>block b</div>

        <div  className={` ${styles.pageBlock} ${isDisplay || !randBlocs.includes(3)  ? '': styles.pageBlockHide} `}>block c</div>

        <div  className={` ${styles.pageBlock} ${isDisplay || !randBlocs.includes(4)  ? '': styles.pageBlockHide} `} >block d </div>
          
        

    </div>
    </>
    
  )
}

export default AdminPanelHomContent