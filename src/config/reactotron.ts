import { NativeModules } from "react-native";
import reactotron from 'reactotron-react-native'

const { scriptURL } = NativeModules.SourceCode
const hostname = scriptURL.split("://")[1].split(":")[0]

reactotron.configure({ host: hostname }).useReactNative()

export default reactotron