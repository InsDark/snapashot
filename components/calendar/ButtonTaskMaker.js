import { COLORS } from "../../COLORS"
import Button from "../Button"

const ButtonTaskMaker = ({setModalVisible, modalVisible, backgroundColor = COLORS.lightBlue}) => {
  return (
    <Button handler={() => { setModalVisible(!modalVisible) }} title="+" buttonStyle={{ position: 'absolute', backgroundColor, width: 50, height: 50, alignItems: 'center', padding: 10, borderRadius: 99999999, right: 15, bottom: 15 }} textStyle={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }} />
  )
}

export default ButtonTaskMaker