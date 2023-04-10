import PropTypes from 'prop-types';
import { useState } from 'react'; /// esto es un hook 


/// se deja afuera del funcional component para que no se vuelva a renderizar. De igual manera funciona 



export const CounterApp = ({value}) => {

   const [ counter , setCounter ] = useState (0); /// este seria el hook 
    
   const handleAdd = (event) =>{
    // console.log(event);
    setCounter(counter + 1);

    } 
    const handleRemove = (event) =>{

        setCounter(counter - 1);
    
        } 

    const handleReset = (event) =>{

        setCounter(value);
        
        }
        /// me devuelve un 10 ya que es el valor anotado dentro del main  

    return(
        <> 
        <h1> CounterApp </h1>
        <h2>{ counter} </h2>
        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleRemove}>
            -1
        </button>
        <button onClick={handleReset}>
            reset
        </button>
        


    </>


    ); 

};

CounterApp.propTypes = {
    value: PropTypes.number,

}

CounterApp.defaultProps = {
    value: 0,
}