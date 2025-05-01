export default function Tab({tab, index,selectedTabIndex,changeTabIndex}){
    return <div className={`tab-header ${index==selectedTabIndex?'active':''}` }  onClick={(e)=>changeTabIndex(index)}>{tab.title}</div>
}