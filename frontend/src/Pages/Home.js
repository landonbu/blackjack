import { useState,useEffect } from 'react';
import '../CSS/Assets/assets.css';
import { useNavigate } from 'react-router-dom'

export default function Home(props){
    return(<div className='container'>
        <div className='title'>HOME PAGE</div>
        <div className='tag'>You could make a grid and a navbar idk</div>
    </div>)
}