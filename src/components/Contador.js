import React, {useState, Fragment} from 'react'; //imr

const Contador = () => {   //sfc

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('Me diste un click')
        setNumero(numero + 1)
    }
    
    return (
        <Fragment>
        <h3>Mi primer componente {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>            
        </Fragment>
      );
}
 
export default Contador;