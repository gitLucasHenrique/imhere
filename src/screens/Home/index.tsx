import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const date = new Date().toLocaleString('BR')
  const participants = ['Part1', 'Part2', 'Part3', 'Part4', 'Part5', 'Part6', 'Part7', 'Part8', 'Part9', 'Part10', 'Part11', 'Part12']
  // const participants = []
  function handleParticipantAdd(participantName: string) {
    if (participants.includes(participantName)) {
      return Alert.alert('Duplicado', `Participante ${participantName} já existe`)
    }
    participants.unshift(participantName)
  }
  function handleParticipantRemove(participantName: string){
    Alert.alert('Remover', `Participante ${participantName} será removido. deseja continuar?`,[
      {
        text: 'Sim',
        onPress: () => Alert.alert('Removido!')
      },
      {
        text: 'Não',
        style:'cancel'
      }
    ])
    console.log(`clicou em remover participante ${participantName}`)
  }
  return (
    <View style={ styles.container }>
      <Text style={ styles.eventName }> Nome do Evento </Text>
      <Text style={ styles.eventDate }> {date} </Text>
      <View style={ styles.form }>
        <TextInput
        style={ styles.input }
        placeholder= "Nome do participante"
        placeholderTextColor= '#0b4a29'
        />
        <TouchableOpacity style={ styles.button } onPress={() => handleParticipantAdd('aaaaa')}>
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