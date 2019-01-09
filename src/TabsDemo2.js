import React from 'react'
import { connect } from 'react-redux'
import { selectTab2 } from './actions'
import TabsWidget from './TabsWidget'

//TabsWidget({tabLabelStringsArray, tabContentComponentArray, selectedIndex, selectTabByIndex}

const mapStateToProps = state => ({
  tabLabelStringsArray: state.tabbedStuff2.tabs.map((tab)=>(tab.tabLabel)),
  tabContentComponentArray: state.tabbedStuff2.tabs.map((tab)=>(<i>{tab.tabContent}</i>)),
  selectedIndex: state.tabbedStuff2.selectedTab
})

const mapDispatchToProps = dispatch => ({
  selectTabByIndex: (tabId) => dispatch(selectTab2(tabId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabsWidget)
