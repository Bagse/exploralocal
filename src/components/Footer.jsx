import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col items-center text-center py-4 font-mont font-medium text-xs gap-2'>
        <h5><span className='text-green-400'>Explora</span>Local © Todos los derechos reservados - 2023</h5>
        <h6>Desarrollado por <a href="https://www.linkedin.com/in/brian-ar%C3%B3n-g%C3%B3mez-sequeiros/" target="_blank" className='text-green-400 hover:underline transition' rel="noopener noreferrer">Bagse</a></h6>
    </footer>
  )
}

export default Footer