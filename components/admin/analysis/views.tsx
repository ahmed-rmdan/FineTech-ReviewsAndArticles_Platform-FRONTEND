'use client'

import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export   function  Views({allviews,postsviews,reviewsviews}:{allviews?:number,postsviews?:number,reviewsviews?:number}){
   
  return(
    <Bar  options= {
{  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Views Analysis Report',
    },
  },
}} data={{labels:['Views'],
        datasets:[{
            label:'ALL VIEWS',
            data:[allviews],
            backgroundColor:'rgba(255, 99, 132, 0.5)',
            borderColor:'rgba(255, 99, 132, 1)'
        },
            {label:'REVIEWS',
                data:[reviewsviews],
                backgroundColor:'rgba(53, 162, 235, 0.5)',
                borderColor:'rgba(54, 162, 235, 1)',
            },
            {label:'POSTS',
                data:[postsviews],
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(255, 206, 86, 1)',
            }
        ]
    }}  className="w-full h-full"  >
 

    </Bar>
  )

}