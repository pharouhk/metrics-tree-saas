import {useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';


function MetricsTreePage() {
    const arrTarg = 56;
    const mrrTarg = 4.5;
    const mauTarg = 33000;
    const carTarg = 27;
    const relTarg = 0.999;
    const latTarg = 5;
    const mttdrTarg = 5;
    const cbrTarg = 11;
    const totalexpTarg = 21350000;
    const churnTarg = 0.22;
    const opexTarg = 500000;

    const [isToggled, setIsToggled] = useState(false);
    return(
        <>
            <div className='container_metrics'>
                <div class='ml-8 mt-4'>
                    <label class="inline-flex items-center cursor-pointer">
                        <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Toggle values
                        </span>
                        <input type="checkbox" value="" class="sr-only peer" onChange={()=>setIsToggled(!isToggled)}/>
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                        </div>
                    </label>     
                </div>
                <div className='metricTreeDiv'>
                    <ul className='ulTreeClass'>
                        <li>
                            <a href="#" id='ARR' class={isToggled? 'hidden': 'inline-block font-bold'}>
                                Annual Recurring Revenue
                            </a>
                            <Tooltip id='tooltipCustom' anchorSelect="#ARR" place="right" clickable>
                                <p class='pl-3'>ARR = other inflows + MRR * 12</p>
                                <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                            </Tooltip>
                            
                            <a href="#" id='ARR-val' class={isToggled && 67>arrTarg? 'inline-block text-green-700 font-bold': (isToggled && 67<arrTarg? 'inline-block text-red-600 font-bold': 'hidden')}>
                                $67,321,987.906
                            </a>
                            <Tooltip id='tooltipCustom' anchorSelect="#ARR-val" place="right" clickable>
                                <p class='pl-3'>ARR Target = {'$'+ arrTarg + 'M'}</p>
                                <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                            </Tooltip>
                            <ul>
                                <li>
                                    <a href="#" id='MRR' class={isToggled? 'hidden': 'inline-block'}>Monthly Recurring Revenue</a>
                                    <Tooltip anchorSelect="#MRR" place="top" clickable>
                                        <p class='pl-3'>MRR = MAU(1 - churn rate) * avg subscription price</p>
                                        <button onClick={()=> window.location.href='http://localhost:5175'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                    </Tooltip>
                                    
                                    <a href="#" id='MRR-val' class={isToggled && 5.2>mrrTarg? 'inline-block text-green-700': (isToggled && 5.2<mrrTarg? 'inline-block text-red-600': 'hidden')}>
                                        $5,239,007.67
                                    </a>
                                    <Tooltip id='tooltipCustom' anchorSelect="#MRR-val" place="top" clickable>
                                        <p class='pl-3'>MRR Target = {'$'+ mrrTarg + 'M'} </p>
                                        <button onClick={()=> window.location.href='http://localhost:5175'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                    </Tooltip>
                                    <ul>
                                        <li>
                                            <a href="#" id='MAU' class={isToggled? 'hidden': 'inline-block'}>Month Active Usage</a>
                                            <Tooltip id='tooltipCustom' anchorSelect="#MAU" place="top" clickable>
                                                <p class='pl-3 text-xs'>MAU = customers with active subscriptions</p>
                                                <button onClick={()=> window.location.href='http://localhost:5175'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                            </Tooltip>

                                            <a href="#" id='MAU-val' class={isToggled && 27034>mauTarg? 'inline-block text-green-700': (isToggled && 27034<mauTarg? 'inline-block text-red-600': 'hidden')}>
                                                27,034
                                            </a>
                                            <Tooltip id='tooltipCustom' anchorSelect="#MAU-val" place="top" clickable>
                                                <p class='pl-3'>MAU Target = {mauTarg} </p>
                                                <button onClick={()=> window.location.href='http://localhost:5175'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                            </Tooltip>
                                            <ul>
                                                <li>
                                                    <a href="#" id='CAR' class={isToggled? 'hidden': 'inline-block'}>Customer Acquisition Rate</a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#CAR" place="top" clickable>
                                                        <p class='pl-3'>CAR = conversions/Leads </p>
                                                        <button onClick={()=> window.location.href='http://localhost:5175'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>

                                                    <a href="#" id='CAR-val' class={isToggled && 24.6>carTarg? 'inline-block text-green-700': (isToggled && 24.6<carTarg? 'inline-block text-red-600': 'hidden')}>
                                                        <p>24.6%</p>
                                                    </a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#CAR-val" place="top" clickable>
                                                        <p class='pl-3'>CAR Target = {carTarg + '%'} </p>
                                                        <button onClick={()=> window.location.href='http://localhost:5175'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" id='Churn' class={isToggled? 'hidden': 'inline-block'}>Churn Rate</a>
                                            <Tooltip id='tooltipCustom' anchorSelect="#Churn" place="top" clickable>
                                                <p class='pl-3'>Churn Rate = Inactive in current month/Active previous month </p>
                                                <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                            </Tooltip>

                                            <a href="#" id='Churn-val' class={isToggled && 0.139<churnTarg? 'inline-block text-green-700': (isToggled && 0.139>churnTarg? 'inline-block text-red-600': 'hidden')}>
                                                <p>13.9%</p>
                                            </a>
                                            <Tooltip id='tooltipCustom' anchorSelect="#Churn-val" place="top" clickable>
                                                <p class='pl-3'>Churn rate Target = {churnTarg*100 + '%'} </p>
                                                <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                            </Tooltip>

                                            <ul className='weaklyCorr'>
                                                <li className='weaklyCorrChild'>
                                                    <a href="#" id='Rel' class={isToggled? 'hidden': 'inline-block'}>Platform Reliability</a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#Rel" place="top" clickable>
                                                        <p class='pl-3'>Reliability = successful/total transactions </p>
                                                        <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>

                                                    <a href="#" id='Rel-val' class={isToggled && 0.996>relTarg? 'inline-block text-green-700': (isToggled && 0.996<relTarg? 'inline-block text-red-600': 'hidden')}>
                                                        99.6%
                                                    </a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#Rel-val" place="top" clickable>
                                                        <p class='pl-3'>Reliability Target = {relTarg *100 + '%'} </p>
                                                        <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>
                                                </li>
                                                <li className='weaklyCorrChild'>
                                                    <a href="#" id='Latency' class={isToggled? 'hidden': 'inline-block'}>Avg. Latency</a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#Latency" place="top" clickable>
                                                        <p class='pl-3'>Avg. Latency = avg response time for 99% of calls to all apis </p>
                                                        <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>

                                                    <a href="#" id='Latency-val' class={isToggled && 21.3<latTarg? 'inline-block text-green-700': (isToggled && 21.3>latTarg? 'inline-block text-red-600': 'hidden')}>
                                                        21.3 seconds
                                                    </a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#Latency-val" place="top" clickable>
                                                        <p class='pl-3'>Target Latency = {latTarg + 'seconds'} </p>
                                                        <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>
                                                </li>
                                                <li className='weaklyCorrChild'>
                                                    <a href="#" id='MTTD_R' class={isToggled? 'hidden': 'inline-block'}>MTTD/R</a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#MTTD_R" place="top" clickable>
                                                        <p class='pl-3'>MTTD = mean time to detect production issues </p>
                                                        <p class='pl-3'>MTTR = mean time to resolve production issues </p>
                                                        <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>

                                                    <a href="#" id='MTTD_R-val' class={isToggled && 15.7<mttdrTarg? 'inline-block text-green-700': (isToggled && 15.7>mttdrTarg? 'inline-block text-red-600': 'hidden')}>
                                                        15.7 minutes
                                                    </a>
                                                    <Tooltip id='tooltipCustom' anchorSelect="#MTTD_R-val" place="top" clickable>
                                                        <p class='pl-3'>Target MTTD/R = {mttdrTarg + 'minutes'} </p>
                                                        <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                                    </Tooltip>

                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" id='other-inflows' class={isToggled? 'hidden': 'inline-block'}>Other Inflows</a>

                                    <a href="#" id='other-inflows-val' class={isToggled? 'inline-block': 'hidden'}>
                                        $2,866,955.12
                                    </a>
                                    
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" id='CBR' class={isToggled? 'hidden': 'inline-block font-bold'}>Cash Burn Rate</a>
                            <Tooltip id='tooltipCustom' anchorSelect="#CBR" place="right" clickable>
                                <p class='pl-3'>CBR = total expenditure/total budgeted cash</p>
                                <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                            </Tooltip>

                            <a href="#" id='CBR-val' class={isToggled && 9.7<cbrTarg? 'inline-block text-green-700 font-bold': (isToggled && 9.7>cbrTarg? 'inline-block text-red-600 font-bold': 'hidden')}>
                                9.7%
                            </a>
                            <Tooltip id='tooltipCustom' anchorSelect="#CBR-val" place="right" clickable>
                                <p class='pl-3'>Target CBR = {cbrTarg } </p>
                                <button class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                            </Tooltip>
                            <ul>
                                <li>
                                    <a href="#" id='Budget' class={isToggled? 'hidden': 'inline-block'}>Total Budget</a>
                                    <Tooltip id='tooltipCustom' anchorSelect="#Budget" place="top" clickable>
                                        <button onClick={()=> window.location.href='http://localhost:5174'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                    </Tooltip>
                                    <a href="#" id='Budget-val' class={isToggled? 'inline-block': 'hidden'}>
                                        $133,445,988.23
                                    </a>
                                    <Tooltip id='tooltipCustom' anchorSelect="#Budget-val" place="top" clickable>
                                        <button onClick={()=> window.location.href='http://localhost:5174'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                    </Tooltip>
                                    
                                </li>
                                <li>
                                    <a href="#" id='Exp' class={isToggled? 'hidden': 'inline-block'}>Total Expenditure</a>
                                    <Tooltip id='tooltipCustom' anchorSelect="#Exp" place="right" clickable>
                                        <p class='pl-3'>Total Expenditure = Opex + CAC</p>
                                        <button onClick={()=> window.location.href='http://localhost:5174'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                    </Tooltip>

                                    <a href="#" id='Exp-val' class={isToggled && 12944260.84<totalexpTarg? 'inline-block text-green-700': (isToggled && 12944260.84>totalexpTarg? 'inline-block text-red-600': 'hidden')}>
                                        $12,944,260.84
                                    </a>
                                    <Tooltip id='tooltipCustom' anchorSelect="#Exp-val" place="right" clickable>
                                        <p class='pl-3'>Expenditure Target = {'$' + totalexpTarg} </p>
                                        <button onClick={()=> window.location.href='http://localhost:5174'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                    </Tooltip>

                                    <ul>
                                        <li>
                                            <a href="#" id='CAC' class={isToggled? 'hidden': 'inline-block'}>Customer Acquisition Cost</a>
                                            <a href="#" id='CAC-val' class={isToggled? 'inline-block': 'hidden'}>
                                                $1,055,672.09
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" id='OPEX' class={isToggled? 'hidden': 'inline-block'}>Other Opex</a>
                                            <Tooltip id='tooltipCustom' anchorSelect="#OPEX" place="right" clickable>
                                                <p class='pl-3'>Other Opex = License Cost + Development Cost + Downtime Cost</p>
                                                <button onClick={()=> window.location.href='http://localhost:5174'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                            </Tooltip>

                                            <a href="#" id='OPEX-val' class={isToggled && 11888588.75<opexTarg? 'inline-block text-green-700': (isToggled && 11888588.75>opexTarg? 'inline-block text-red-600': 'hidden')}>
                                                $11,888,588.75
                                            </a>
                                            <Tooltip id='tooltipCustom' anchorSelect="#OPEX-val" place="right" clickable>
                                                <p class='pl-3'>OPEX Target = {'$' + opexTarg} </p>
                                                <button onClick={()=> window.location.href='http://localhost:5174'} class='text-left pl-3 w-full' id='viewDashboard'>Explore metric in dashboard</button>
                                            </Tooltip>
                                            <ul>
                                                <li>
                                                    <a href="#" id='License' class={isToggled? 'hidden': 'inline-block'}>License Cost</a>
                                                    <a href="#" id='License-val' class={isToggled? 'inline-block': 'hidden'}>
                                                        $5,000,000.00
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id='Dev-cost' class={isToggled? 'hidden': 'inline-block'}>Development Cost</a>
                                                    <a href="#" id='Dev-cost-val' class={isToggled? 'inline-block': 'hidden'}>
                                                        $4,798,012.56
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" id='Downtime-cost' class={isToggled? 'hidden': 'inline-block'}>Downtime Cost</a>
                                                    <a href="#" id='Downtime-cost-val' class={isToggled? 'inline-block': 'hidden'}>
                                                        $2,090,576.19
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class='flex gap-x-12 ml-10 mt-2'>
                    <div class='flex items-center gap-x-4'>
                        <hr class='w-28 border-gray-600 '/>
                        <p>
                            Strongly correlated
                        </p>
                    </div>
                    <div class='flex items-center gap-x-4 '>
                        <hr class='w-28 border-dashed border-gray-600'/>
                        <p>
                            Weakly correlated
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MetricsTreePage;