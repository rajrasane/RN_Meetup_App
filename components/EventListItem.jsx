import { Text, View , Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';


const EventListItem = ({event}) => {
  return (
    <View className='p-3 gap-3'>

        <View className='flex-row'>
          <View className='flex-1 gap-2'>
            <Text className='text-lg font-semibold uppercase text-amber-800 '>Wed 13, Sep · 19.30 CET</Text>
            <Text className='text-xl font-bold' numberOfLines={2}>{event.title}</Text>
            <Text className='text-gray-700'>{event.location}</Text>
          </View>

          <Image source={{ uri : event.image }} className='w-2/5 aspect-video rounded-xl ml-2'/>

        </View>

        
        {/* Footer */}
        <View className='flex-row gap-3'>
          <Text className='text-gray-700 mr-auto'>16 going</Text>
          <Feather name="share" size={20} color="gray" />
          <Feather name="bookmark" size={20} color="gray" />
        </View>
      </View>
  )
}

export default EventListItem