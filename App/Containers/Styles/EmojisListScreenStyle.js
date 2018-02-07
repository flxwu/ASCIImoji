import {
  StyleSheet
} from 'react-native'
import {
  ApplicationStyles,
  Metrics,
  Colors
} from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    width: Metrics.screenWidth / 2 - Metrics.doubleBaseMargin,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.frost,
    borderRadius: Metrics.smallMargin
  },
  sectionHeader: {
    paddingTop: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
    alignSelf: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.background
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.text,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  emojiDemoText: {
    backgroundColor: 'white',
    height: 50,
    flexGrow: 1,
    textAlign: 'center',
    color : 'black',
  }
})
