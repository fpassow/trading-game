import React from 'react'

const tabsWidgetStyle = {
    background: "black",
    border: "3px solid black",
    width: "400px"
}
const contentAreaStyle = {
    background: "white",
    border: "none",
    margin:"0px",
    height: "400px",
    width: "360px",
    padding: "20px"
}
const selectedTabStyle = {
    display:"inline-block", 
    padding:"10px", 
    background:"white",
    borderTop: "2px solid black",
    borderLeft: "2px solid black",
    borderRight: "2px solid black",
    borderBottom: "2px solid white",
}
const notSelectedTabStyle = {
    display:"inline-block", 
    padding:"10px", 
    background:"#eee",
    border: "2px solid black"
}
const ghostButton = {
	border:"none",
	background: "inherit"
}

const Tab = ({labelString, selected, tabIndex, selectTabByIndex})=>(
    <div  style={selected?selectedTabStyle:notSelectedTabStyle} >
        <button style={ghostButton} onClick={()=>{selectTabByIndex(tabIndex)}}>{labelString}</button>
   </div>
)

const Tabs = ({tabLabelStringsArray, selectedIndex, selectTabByIndex})=>(
	<div>
        {tabLabelStringsArray.map((labelString, index)=>(
        	<Tab 
        	    key={index}
        	    labelString={labelString} 
        	    tabIndex={index}
        	    selected={selectedIndex === index} 
        	    selectTabByIndex={selectTabByIndex} 
        	/>
        ))}
	</div>
)

const TabsWidget = ({tabLabelStringsArray, tabContentComponentArray, selectedIndex, selectTabByIndex})=>{
	return (
		<div className="tabswidget" style={tabsWidgetStyle}>
		    <Tabs tabLabelStringsArray={tabLabelStringsArray} 
		          selectedIndex={selectedIndex} 
		          selectTabByIndex={selectTabByIndex} 
		    />
		    <div className="tabConetentArea" style={contentAreaStyle}>
                {tabContentComponentArray[selectedIndex]}
	        </div>
		</div>
	)
}

export default TabsWidget