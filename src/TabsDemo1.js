import React from 'react'
import { connect } from 'react-redux'
import { selectTab1 } from './actions'
import TabsWidget from './TabsWidget'

//TabsWidget({tabLabelStringsArray, tabContentComponentArray, selectedIndex, selectTabByIndex}

const mapStateToProps = state => ({
  tabLabelStringsArray: state.tabbedStuff1.tabs.map((tab)=>(tab.tabLabel)),
  tabContentComponentArray: state.tabbedStuff1.tabs.map((tab)=>(<i>{tab.tabContent}</i>)),
  selectedIndex: state.tabbedStuff1.selectedTab
})

const mapDispatchToProps = dispatch => ({
  selectTabByIndex: (tabId) => dispatch(selectTab1(tabId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsWidget)
