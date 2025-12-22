'use client'

import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement,} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);
export function  Compare({postsnop,reviewsnop}:{postsnop?:number,reviewsnop?:number}){
   


 

  return(
    <Doughnut 
         options={ 
{  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Compare Analysis Report',
    },
  },
}}
    
    data={{labels:['Posts ' , ' Reviews'],
        datasets:[{
            label:' Number of ',
            data:[postsnop,reviewsnop],
            backgroundColor:[    'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',],
        borderColor:[
            'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',],
            borderWidth:1,
        },
    
          
          
        ]
    }}  className="w-full h-full"  >
 

    </Doughnut>
  )

}