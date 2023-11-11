import { AntDesign, Entypo } from '@expo/vector-icons'
import { Tab } from '@rneui/themed'
import { navStore } from '../stores/NavStore'
import { COLORS } from '../COLORS'
const BottomNav = () => {
  const { index, setIndex } = navStore(state => state)
  return (
    <>
      <Tab
        value={index}
        onChange={(e) => {
          setIndex(e)}}
        indicatorStyle={{
          height: 2,
          marginBottom: 9,
        }}
        variant="default"
        containerStyle={{backgroundColor: COLORS.lightBlue}}
      >
        <Tab.Item
          title="Home"
          titleStyle={{color: COLORS.white}}
          icon={<AntDesign name='home' size={20}  color={COLORS.white}/>}
        />
        
        <Tab.Item
          title="Gallery"
          titleStyle={{color: COLORS.white}}
          icon={<Entypo name='folder-images'  size={20} color={COLORS.white}/>}
        />

      </Tab>
    </>
  )
}

export default BottomNav