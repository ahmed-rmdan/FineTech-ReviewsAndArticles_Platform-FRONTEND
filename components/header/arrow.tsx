import { ArrowDown } from 'lucide-react';
export  function Arrow({active}:{active:boolean}){ 
  return (

    <ArrowDown className={` hover:cursor-pointer ${active ? 'rotate-180' : ''}`} size={'1.3em'}></ArrowDown>
    
  )
  }