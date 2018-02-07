import React, { Component } from 'react'
import { View, ListView, Text, TouchableOpacity, Clipboard, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'

// For empty lists
// import AlertMessage from '../Components/AlertMessage'

// Styles
import styles from './Styles/EmojisListScreenStyle'
import { Colors } from '../Themes/index';

class EmojisListScreen extends Component {
  constructor (props) {
    super(props)

    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = require('../Fixtures/content.json') 
    
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *   The same goes for sectionHeaderHasChanged
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2
    const sectionHeaderHasChanged = (s1, s2) => s1 !== s2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged, sectionHeaderHasChanged})
    this.selected = this.selected.bind(this);
    this.renderRow = this.renderRow.bind(this);

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataObjects),
      selectedEmoji: 'Copy a Emoji by clicking on it!'
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData, sectionID) {
    // You can condition on sectionID (key as string), for different cells
    // in different sections
    return (
      <TouchableOpacity style={styles.row} onPress={() => this.selected(rowData.art)}>
        <Text style={styles.boldLabel}>{rowData.name}</Text>
        <Text style={styles.label}>{rowData.art}</Text>
      </TouchableOpacity>
    )
  }

  selected(emoji) {
    Clipboard.setString(emoji)
    this.setState({selectedEmoji: emoji})
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRowsAndSections` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRowsAndSections(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  renderSectionHeader (sectionData, sectionID) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionText}>{sectionID}</Text>
      </View>
      )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          renderSectionHeader={this.renderSectionHeader}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          onLayout={this.onLayout}
          renderRow={this.renderRow}
          enableEmptySections
        />
        <TextInput 
          style={styles.emojiDemoText}
          value={this.state.selectedEmoji}
          editable={false}
          underlineColorAndroid='transparent'
          ref={(input) => { this.textInput = input }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojisListScreen)
