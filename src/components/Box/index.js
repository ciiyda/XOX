import React,{useState} from 'react'
import './styles.css'

function Box(props){
    // eslint-disable-next-line no-unused-vars
    const[text,setText]=useState('')

    function toggleText(){
        if(text===''){
            setText(props.currenState)
            props.changeTurn(props.row, props.col)

        }
    }

    return <div className='box' onClick={toggleText}>
        {text}

    </div>
}

export default Box