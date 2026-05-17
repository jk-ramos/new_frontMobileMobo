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

import { PrimaryButton, ShadowField, colors } from '@/components/mobo-ui';

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      alert('As senhas precisam ser iguais.');
      return;
    }

    router.push('/(tabs)/completar-cadastro');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.red }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.red }}
      >
        <View
          style={{
            flexGrow: 1,
            width: '100%',
            maxWidth: 390,
            alignSelf: 'center',
            backgroundColor: colors.red,
          }}
        >
          <Image
            source={require('../../assets/images/logo-branca.png')}
            style={{
              position: 'absolute',
              top: 76,
              alignSelf: 'center',
              width: 88,
              height: 49,
              zIndex: 4,
            }}
            resizeMode="contain"
          />

          <View style={{ height: 355, marginTop: 116, overflow: 'hidden' }}>
            <Image
              source={require('../../assets/images/robofrosa.png')}
              style={{ width: 390, maxWidth: '100%', height: '100%', opacity: 0.96 }}
              resizeMode="contain"
            />
          </View>

          <View
            style={{
              flex: 1,
              marginTop: -18,
              backgroundColor: colors.wine,
              borderTopLeftRadius: 42,
              borderTopRightRadius: 42,
              paddingHorizontal: 32,
              paddingTop: 44,
              paddingBottom: 34,
            }}
          >
            <Text
              style={{
                color: colors.cream,
                fontFamily: 'Livvic_400Regular',
                fontSize: 27,
                textAlign: 'center',
                marginBottom: 38,
              }}
            >
              Faça seu Cadastro
            </Text>

            <ShadowField>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu Email"
                placeholderTextColor="#E8E3D3"
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                  color: colors.cream,
                  fontFamily: 'Livvic_400Regular',
                  fontSize: 25,
                  paddingHorizontal: 20,
                }}
              />
            </ShadowField>

            <ShadowField>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Digite sua Senha"
                  placeholderTextColor="#E8E3D3"
                  secureTextEntry={!showPassword}
                  style={{
                    flex: 1,
                    color: colors.cream,
                    fontFamily: 'Livvic_400Regular',
                    fontSize: 25,
                  }}
                />
                <TouchableOpacity onPress={() => setShowPassword((value) => !value)}>
                  <Ionicons name="eye-outline" size={30} color={colors.cream} />
                </TouchableOpacity>
              </View>
            </ShadowField>

            <ShadowField>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Confirme sua Senha"
                  placeholderTextColor="#E8E3D3"
                  secureTextEntry={!showConfirmPassword}
                  style={{
                    flex: 1,
                    color: colors.cream,
                    fontFamily: 'Livvic_400Regular',
                    fontSize: 25,
                  }}
                />
                <TouchableOpacity onPress={() => setShowConfirmPassword((value) => !value)}>
                  <Ionicons name="eye-outline" size={30} color={colors.cream} />
                </TouchableOpacity>
              </View>
            </ShadowField>

            <View style={{ height: 34 }} />
            <PrimaryButton title="Cadastre-se" onPress={handleSubmit} />

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push('/(tabs)/login')}
              style={{ marginTop: 32 }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#DDD8C9',
                  fontFamily: 'Livvic_400Regular',
                  fontSize: 22,
                }}
              >
                Já possui conta?{' '}
                <Text style={{ color: colors.cream, fontFamily: 'Livvic_700Bold' }}>
                  Faça o login
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
