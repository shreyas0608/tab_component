import { useState } from 'react'
import './App.css'
import Tab from './Tab';

function App() {
  const tabData=[
    {title:'Tab 1', description: 'Tab1 Description'},
    {title:'Tab 2', description: 'Tab2 Description'},
    {title:'Tab 3', description: 'Tab3 Description'},
  ];
  let [selectedTabIndex, setSelectedTabIndex]= useState(0);

  function changeTabIndex(index){
    setSelectedTabIndex(index);
  }
  return (

    <>
    <div className='tab'>
      {
        tabData.map((tab,index)=> { return <Tab tab={tab} index={index} selectedTabIndex={selectedTabIndex} changeTabIndex={changeTabIndex}></Tab>})
      }
    </div>  
    <div className='tab-description'>
        {tabData[selectedTabIndex].description}
      </div>
    </>
  )
}

export default App
