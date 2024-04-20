'use client'
import React, { useState, useEffect } from 'react';
import getBibleVerse from '../app/utils/getBibleVerse';


const BibleVerse = () => {
   const [text, setText] = useState('');
   const [reference, setReference] = useState('');
   const [showVerse, setShowVerse] = useState(false); // Estado para controlar la aparición gradual, en este caso false para que no aparezca desde un inicio

   useEffect(() => {
       const fetchVerse = async () => { 
           const verseData = await getBibleVerse();
           setText(verseData.text);
           setReference(verseData.reference);
           // Una vez que se obtiene el verso, establecemos el estado para mostrar el verso gradualmente
           setShowVerse(true);
       };

       fetchVerse();
   }, []);

   return (                                                                    // se usa este id que es el contiene el efecto en global.css
        <div className={`flex items-center justify-center pt-28 ${showVerse ? 'fade-in' : ''}`}> 
            <div className='flex flex-col items-center justify-center h-96 w-4/5 tracking-wider'>
                <p>{text}</p>
                <br></br>
                <p className=''>{reference}</p>              
            </div>
        </div>
   );
};

export default BibleVerse;

