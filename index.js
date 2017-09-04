import { AsyncStorage, Alert } from 'react-native'

export const asyncStorageContentsAsObject = async () => {
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
}

export const logAsyncStorage = async () => {
  const contents = await asyncStorageContentsAsObject()
  console.log('AsyncStorage contents: ', contents)
}

// TODO(jan): Print length
// TODO(jan): Sort by length
export const showAsyncStorageAlert = () => {
  showAlert &&
    Alert.alert('AsyncStorage Contents', JSON.stringify(contents, null, 2), [
      {
        text: 'Ok',
        onPress: () => {},
      },
    ])
}
