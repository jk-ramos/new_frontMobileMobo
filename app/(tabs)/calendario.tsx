import { Text, View } from 'react-native';

export default function Calendario() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F8F2EB',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontFamily: 'Livvic_700Bold',
          fontSize: 26,
          color: '#8A122D',
        }}
      >
        Página Calendário
      </Text>
    </View>
  );
}