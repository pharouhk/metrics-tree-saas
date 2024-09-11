import { useState } from 'react';
import MetricsTreePage from './components/metricsTree.jsx';
import DashboardTreePage from './components/dashboardTree.jsx';
import 'react-tooltip/dist/react-tooltip.css';



function App() {
  const [activeTab, setActiveTab] = useState('metrics-page');

  return (
    <>
      <div class='flex flex-col'>
        <div class="border-b pt-4 px-4 border-gray-200 text-center "
        // flex 
        >
          <div id="tab_list" class='flex gap-x-20 text-gray-500'>
            {/* <li id="tab_list1" class='me-2'> */}
              <a href='#' id="metrics-page" class={activeTab==='metrics-page'? 
              'font-bold leading-10 inline-flex items-center justify-center border-b-2 rounded-t-lg text-blue-600 border-blue-600': 
              ' no-underline leading-10 inline-flex items-center justify-center border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'}
              onClick={()=>setActiveTab('metrics-page')}>
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z"/>
                </svg>Metrics Tree
              </a>
            {/* </li> */}
            {/* <li id="tab_list1" class='me-2'> */}
              <a href='#' id="dashboard-page" class={activeTab==='dashboard-page'? 
              'font-bold leading-10 inline-flex items-center justify-center border-b-2 rounded-t-lg text-blue-600 border-blue-600': 
              'no-underline leading-10 inline-flex items-center justify-center border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'}
              onClick={()=>setActiveTab('dashboard-page')}>
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Dashboard Tree
              </a>
            {/* </li> */}
          </div>
        </div>
        <div>
          <div class={activeTab==='metrics-page'? '': 'hidden'}>
            <MetricsTreePage />
          </div>
          <div class={activeTab==='dashboard-page'? '': 'hidden'}>
            <DashboardTreePage />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
