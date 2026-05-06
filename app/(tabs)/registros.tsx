import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

export default function Registros() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8F2EB' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 24, paddingTop: 40 }}
      >
        <Text
          style={{
            fontFamily: 'Livvic_700Bold',
            fontSize: 28,
            color: '#2B2B2B',
            marginBottom: 8,
          }}
        >
          Registros
        </Text>

        <Text
          style={{
            fontFamily: 'Livvic_400Regular',
            fontSize: 17,
            color: '#8A8A8A',
            marginBottom: 28,
          }}
        >
          Histórico de atividades do MOBO
        </Text>

        {[
          {
            title: 'Lichia madura detectada',
            subtitle: 'Controle - Câmera',
            time: 'Hoje • 14:30',
            icon: 'camera-outline',
          },
          {
            title: 'Movimento da garra',
            subtitle: 'Joystick esquerdo',
            time: 'Hoje • 13:15',
            icon: 'hand-left-outline',
          },
          {
            title: 'Esteira acionada',
            subtitle: 'Joystick direito',
            time: 'Ontem • 16:05',
            icon: 'game-controller-outline',
          },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 20,
              padding: 18,
              marginBottom: 14,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 48,
                height: 48,
                borderRadius: 16,
                backgroundColor: '#F2D6DC',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 14,
              }}
            >
              <Ionicons name={item.icon as any} size={24} color="#8A122D" />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: 'Livvic_700Bold',
                  fontSize: 17,
                  color: '#2B2B2B',
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  fontFamily: 'Livvic_400Regular',
                  fontSize: 15,
                  color: '#8A8A8A',
                  marginTop: 3,
                }}
              >
                {item.subtitle}
              </Text>
            </View>

            <Text
              style={{
                fontFamily: 'Livvic_400Regular',
                fontSize: 13,
                color: '#8A8A8A',
              }}
            >
              {item.time}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}