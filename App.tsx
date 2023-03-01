import { StatusBar } from "react-native";
import reactotron from "./src/config/reactotron";
import Home from "./src/screens/Home";

reactotron.connect()

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor='transparent'
        translucent
      />
    </>
  )
}
