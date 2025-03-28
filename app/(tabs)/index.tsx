import { Stack } from 'expo-router';
import { Text, View , Image} from 'react-native';
import EventListItem from '../../components/EventListItem';
import events from '~/assets/events.json'

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <EventListItem event={events[3]} />
      <EventListItem event={events[7]} />
      <EventListItem event={events[2]} />
    </>
  );
}