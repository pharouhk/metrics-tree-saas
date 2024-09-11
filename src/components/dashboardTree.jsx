import {useEffect, useState } from 'react';
import excoImg from '../assets/exco-bg.jpg';
import techImg from '../assets/tech-bg.jpg';
import analyticsImg from '../assets/products-bg.jpg';
import budgetImg from '../assets/budget-bg.png';

function DashboardTreePage() {
    return(
        <>
            <div className='container_dashboard'>
                <div class='ml-8 mt-4'>
                </div>
                <div className='dashboardTreeDiv'>
                    <ul className='ulTreeClass'>
                        <li>
                            <div id='grow' class="w-full max-w-[10rem] mx-auto rounded-md shadow-md overflow-hidden">
                                <div class="flex items-end justify-end h-16 w-full bg-cover" style={{backgroundImage: "url('" + excoImg + "')"}}>
                                </div>
                                <div class='px-5 bg-white'>
                                    <h3 class="text-gray-700 uppercase"><a href='#' className='dashboard-link'>Executive Operations </a></h3>
                                    <span class="text-gray-500 mt-2 text-[0.5rem]">Key metrics: ARR, MRR</span>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div id='grow' class="w-full max-w-[12rem] mx-auto rounded-md shadow-md overflow-hidden">
                                        <div class="flex items-end justify-end h-16 w-full bg-cover" style={{backgroundImage: "url('" + analyticsImg + "')"}}>
                                        </div>
                                        <div class='px-5 bg-white'>
                                            <h3 class="text-gray-700 uppercase"><a href='http://localhost:5175' target="_blank" rel="noopener noreferrer" className='dashboard-link'>Product Analytics </a></h3>
                                            <span class="text-gray-500 mt-2 text-[0.5rem]">Key metrics: MAU, CAR</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div id='grow' class="w-full max-w-[12rem] mx-auto rounded-md shadow-md overflow-hidden">
                                        <div class="flex items-end justify-end h-16 w-full bg-cover" style={{backgroundImage: "url('" + techImg + "')"}}>
                                        </div>
                                        <div class='px-5 bg-white'>
                                            <h3 class="text-gray-700 uppercase"><a href='#' className='dashboard-link'>Platform Monitoring </a></h3>
                                            <span class="text-gray-500 mt-2 text-[0.5rem]">Key metrics: Reliability, MTTD, latency </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div id='grow' class="w-full max-w-[12rem] mx-auto rounded-md shadow-md overflow-hidden">
                                <div class="flex items-end justify-end h-16 w-full bg-cover" style={{backgroundImage: "url('" + budgetImg + "')"}}>
                                </div>
                                <div class='px-5 bg-white'>
                                    <h3 class="text-gray-700 uppercase"><a href='http://localhost:5174' target="_blank" rel="noopener noreferrer" className='dashboard-link'>Expense Dashboard</a></h3>
                                    <span class="text-gray-500 mt-2 text-[0.5rem]">Key metrics: CBR, CAC</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default DashboardTreePage;