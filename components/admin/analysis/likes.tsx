'use client'

import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement,} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,ArcElement);
export function  Likes({postslikes,reviewslikes}:{postslikes?:number,reviewslikes?:number}){
   

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
      text: 'Likes Analysis Report',
    },
  },
}}
    data={{labels:['Posts' , ' Reviews'],
        datasets:[{
            label:' Likes of ',
            data:[postslikes,reviewslikes],
            backgroundColor:[    'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',],
        borderColor:[
           'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',],
            borderWidth:1,
        },
    
          
          
        ]
    }}  className="w-full h-full "  >
 

    </Doughnut>
  )

}