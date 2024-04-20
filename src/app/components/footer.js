'use client'
import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [mostrarFooter, setMostrarFooter] = useState(false);

    useEffect(() => {

        const audioElement = document.getElementById('miAudio');
  
      // Función para iniciar la reproducción del audio
      const playAudio = () => {
        audioElement.play();
      };
  
      // Agrega un event listener al enlace para iniciar la reproducción del audio
      const link = document.getElementById('startAudioLink');
      link.addEventListener('click', playAudio);
  

        // Establecer un temporizador para cambiar el estado después de 2 segundos (2000 milisegundos)
        const temporizador = setTimeout(() => {
            setMostrarFooter(true);
        }, 6000);

        // Limpia el temporizador cuando el componente se desmonta o cuando el estado cambia antes del tiempo establecido
        return () => {
            clearTimeout(temporizador);
            link.removeEventListener('click', playAudio);
        };
        
    }, []); // El segundo argumento del useEffect es un array vacío para que este efecto se ejecute solo una vez después de que el componente se monte

    return (
        
        <footer className={mostrarFooter ? 'footer-show' : 'footer-hide'}>
            {/*<a className='absolute left-6 bottom-32'>touch the pic bb↓</a>*/}
            <div className='bg-gray-700 flex w-60 h-24 gap-3 p-4 rounded-2xl items-end relative top-14'>
            <a href="#" id="startAudioLink">
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute left-10 bottom-10 opacity-0 transition-opacity duration-300 hover:opacity-100' width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7z"/></svg>
                <img src="https://res.cloudinary.com/dnvwjkcpj/image/upload/v1713552992/ip76bthed8koqrnsiwz0.jpg" alt="Logo" className="h-16 rounded-xl" />
            </a>
            <audio id="miAudio">
                <source src="https://res.cloudinary.com/dnvwjkcpj/video/upload/v1713630602/hysye6d0vku4hjbdwbvt.mp3" type="audio/mp3" />
                Tu navegador no soporta la etiqueta de audio HTML5.
            </audio>
                <div className="flex flex-col">
                    <p className="font-bold text-lg m-0">285</p>
                    <p className="font-normal text-lg">WHATURPG</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer ;

