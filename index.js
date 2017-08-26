import { AsyncStorage, Alert } from 'react-native'

// TODO(jan): Sort by length
export default async (showAlert = false) => {
  const contents = {}
  const keys = await AsyncStorage.getAllKeys()
  for (const key of keys) {
    const itemString = await AsyncStorage.getItem(key)
    try {
      const parsedItem = JSON.parse(itemString)
      contents[key] = parsedItem
    } catch (e) {
      contents[key] = itemString
    }
  }
  console.log('AsyncStorage contents: ', contents)
  // TODO(jan): Think of a better way
  showAlert &&
    Alert.alert('AsyncStorage Contents', JSON.stringify(contents, null, 2), [
      { text: 'Ok', onPress: () => {} },
    ])
}
