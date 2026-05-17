import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { PrimaryButton, colors } from '@/components/mobo-ui';

export default function CompletarCadastro() {
  const [accountType, setAccountType] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [cap, setCap] = useState('');

  function handleSubmit() {
    if (!accountType.trim() || !phone.trim() || !cpf.trim() || !cap.trim()) {
      alert('Complete os dados do cadastro.');
      return;
    }

    router.replace('/(tabs)/home');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.red }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ minHeight: 900, backgroundColor: colors.red, overflow: 'hidden' }}>
          <Image
            source={require('../../assets/images/robofrosa.png')}
            style={{
              position: 'absolute',
              top: 116,
              left: -20,
              width: '112%',
              height: 430,
              opacity: 0.5,
            }}
            resizeMode="contain"
          />

          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(98, 0, 30, 0.34)',
            }}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.back()}
            style={{
              position: 'absolute',
              top: 70,
              left: 28,
              width: 46,
              height: 46,
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 5,
            }}
          >
            <Ionicons name="arrow-back" size={36} color={colors.white} />
          </TouchableOpacity>

          <Image
            source={require('../../assets/images/logo-branca.png')}
            style={{
              position: 'absolute',
              top: 58,
              alignSelf: 'center',
              width: 120,
              height: 68,
              zIndex: 4,
            }}
            resizeMode="contain"
          />

          <View
            style={{
              flex: 1,
              paddingHorizontal: 22,
              paddingTop: 190,
              paddingBottom: 42,
            }}
          >
            <View style={{ alignItems: 'center', marginBottom: 22 }}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={{
                  width: 122,
                  height: 122,
                  borderRadius: 61,
                  borderWidth: 4,
                  borderColor: 'rgba(248, 242, 235, 0.9)',
                  backgroundColor: 'rgba(248, 242, 235, 0.2)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 7 },
                  shadowOpacity: 0.24,
                  shadowRadius: 12,
                  elevation: 8,
                }}
              >
                <Ionicons name="person" size={76} color="#F2E6EA" />
                <View
                  style={{
                    position: 'absolute',
                    right: -1,
                    bottom: 7,
                    width: 42,
                    height: 42,
                    borderRadius: 21,
                    backgroundColor: colors.magenta,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: 'rgba(248, 242, 235, 0.32)',
                  }}
                >
                  <Ionicons name="add" size={30} color={colors.white} />
                </View>
              </TouchableOpacity>

              <Text
                style={{
                  color: colors.cream,
                  fontFamily: 'Livvic_400Regular',
                  fontSize: 29,
                  marginTop: 20,
                  textAlign: 'center',
                }}
              >
                Complete seu cadastro!
              </Text>

              <Text
                style={{
                  color: '#E8E3D3',
                  fontFamily: 'Livvic_400Regular',
                  fontSize: 18,
                  lineHeight: 23,
                  marginTop: 8,
                  textAlign: 'center',
                  maxWidth: 315,
                }}
              >
                Precisamos de mais algumas informações para criar sua conta.
              </Text>
            </View>

            <View
              style={{
                borderWidth: 1.5,
                borderColor: 'rgba(236, 78, 132, 0.58)',
                borderRadius: 18,
                backgroundColor: 'rgba(79, 0, 25, 0.42)',
                paddingHorizontal: 18,
                paddingTop: 28,
                paddingBottom: 26,
              }}
            >
              <ProfileField
                icon="person-outline"
                label="Tipo de Conta *"
                value={accountType}
                onChangeText={setAccountType}
                placeholder="Selecione o tipo de conta"
                rightIcon="chevron-down"
              />

              <ProfileField
                icon="call-outline"
                label="Telefone *"
                value={phone}
                onChangeText={setPhone}
                placeholder="(00) 00000-0000"
                keyboardType="phone-pad"
              />

              <ProfileField
                icon="id-card-outline"
                label="CPF *"
                value={cpf}
                onChangeText={setCpf}
                placeholder="000.000.000-00"
                keyboardType="number-pad"
              />

              <ProfileField
                icon="location-outline"
                label="CAP"
                value={cap}
                onChangeText={setCap}
                placeholder="Digite seu CAP"
                fieldMarginBottom={30}
              />

              <PrimaryButton title="Cadastrar-se" onPress={handleSubmit} />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 42,
                  gap: 10,
                }}
              >
                <Ionicons name="lock-closed-outline" size={18} color="#EC4E84" />
                <Text
                  style={{
                    color: '#DDD8C9',
                    fontFamily: 'Livvic_400Regular',
                    fontSize: 15,
                  }}
                >
                  Seus dados estão protegidos
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function ProfileField({
  icon,
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  rightIcon,
  fieldMarginBottom = 22,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad';
  rightIcon?: keyof typeof Ionicons.glyphMap;
  fieldMarginBottom?: number;
}) {
  return (
    <View style={{ marginBottom: fieldMarginBottom }}>
      <View
        style={{
          position: 'absolute',
          top: -11,
          left: 72,
          zIndex: 2,
          backgroundColor: colors.wine,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ color: colors.cream, fontFamily: 'Livvic_400Regular', fontSize: 16 }}>
          {label}
        </Text>
      </View>

      <View
        style={{
          minHeight: 70,
          borderRadius: 15,
          borderWidth: 1.5,
          borderColor: '#EC4E84',
          backgroundColor: 'rgba(97, 0, 30, 0.22)',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 18,
        }}
      >
        <Ionicons name={icon} size={30} color="#EC4E84" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#D9C9C8"
          keyboardType={keyboardType}
          style={{
            flex: 1,
            color: colors.cream,
            fontFamily: 'Livvic_400Regular',
            fontSize: 20,
            paddingLeft: 18,
            paddingRight: rightIcon ? 10 : 0,
          }}
        />
        {rightIcon ? <Ionicons name={rightIcon} size={28} color={colors.white} /> : null}
      </View>
    </View>
  );
}
