import { StackNavigator } from 'react-navigation'
import EmojisListScreen from '../Containers/EmojisListScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  EmojisListScreen: { screen: EmojisListScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'EmojisListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
