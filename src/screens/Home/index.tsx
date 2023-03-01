import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const todaySplited = new Date().toLocaleString('BR').split(':')
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')
  const [today, setToday] = useState(todaySplited[0].concat(':',todaySplited[1]))

  setTimeout(() => {
    const todaySplited = new Date().toLocaleString('BR').split(':')
    setToday(todaySplited[0].concat(':',todaySplited[1]))
  }, 30000);

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert('Duplicado', `Participante ${participantName} já existe`)
    }
    setParticipants(prevState => [participantName, ...prevState])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Participante ${name} será removido. deseja continuar?`,[
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style:'cancel'
      }
    ])    
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.eventName }> Nome do Evento </Text>
      <Text style={ styles.eventDate }> {today} </Text>
      <View style={ styles.form }>
        <TextInput
        style={ styles.input }
        placeholder= "Nome do participante"
        placeholderTextColor= '#0b4a29'
        onChangeText={setParticipantName}
        value={participantName}
        />
        <TouchableOpacity style={ styles.button } onPress={handleParticipantAdd}>
          <Text style={ styles.buttonText }> + </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nobody is on? Add a few~
          </Text>
        )}
      />
    </View>
  )
}