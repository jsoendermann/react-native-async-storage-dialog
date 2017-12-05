import { AsyncStorage } from 'react-native'

export default async () => {
  const keys = await AsyncStorage.getAllKeys()
  const array = await AsyncStorage.multiGet(keys)
  const obj = {}
  array.sort((a, b) => b[1].length - a[1].length).forEach(([key, value]) => {
    try {
      obj[key] = JSON.parse(value)
    } catch (e) {
      obj[key] = value
    }
  })
  console.log(obj)
}
