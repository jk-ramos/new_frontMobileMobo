import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { RecordCard, TopBrandBar, colors } from '@/components/mobo-ui';

export default function Registros() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.cream }}>
      <TopBrandBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 26,
          paddingBottom: 18,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}
        >
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={32} color={colors.text} />
          </TouchableOpacity>
          <Text style={{ fontFamily: 'Livvic_700Bold', fontSize: 22, color: colors.text }}>
            Registros
          </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            style={{
              width: 46,
              height: 46,
              borderRadius: 16,
              backgroundColor: colors.white,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons name="notifications-outline" size={26} color={colors.text} />
            <View
              style={{
                position: 'absolute',
                top: 14,
                right: 12,
                width: 9,
                height: 9,
                borderRadius: 5,
                backgroundColor: colors.red,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <View
            style={{
              flex: 1,
              height: 48,
              borderRadius: 16,
              backgroundColor: colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 18,
            }}
          >
            <Ionicons name="search-outline" size={26} color="#B4B4B4" />
            <TextInput
              placeholder="Pesquisar...."
              placeholderTextColor="#B4B4B4"
              style={{
                flex: 1,
                marginLeft: 12,
                fontFamily: 'Livvic_400Regular',
                fontSize: 17,
                color: colors.text,
              }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.85}
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              backgroundColor: colors.wine,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Ionicons name="options-outline" size={26} color={colors.white} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 14,
            backgroundColor: colors.oliveLight,
            paddingHorizontal: 14,
            paddingVertical: 9,
            marginBottom: 18,
          }}
        >
          <Text style={{ fontFamily: 'Livvic_700Bold', fontSize: 17, color: colors.white }}>
            Hoje
          </Text>
          <Ionicons name="close" size={20} color={colors.white} style={{ marginLeft: 8 }} />
        </TouchableOpacity>

        {[0, 1, 2, 3].map((item) => (
          <RecordCard key={item} index={item} />
        ))}
      </ScrollView>
    </View>
  );
}
