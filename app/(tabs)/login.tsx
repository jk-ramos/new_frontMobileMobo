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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email.trim()) {
      alert('Digite seu e-mail.');
      return;
    }

    if (!email.includes('@')) {
      alert('Digite um e-mail válido.');
      return;
    }

    if (!password.trim()) {
      alert('Digite sua senha.');
      return;
    }

    if (password.length < 6) {
      alert('A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    router.push('/home');
  }

  return (
    <KeyboardAvoidingView 
    style={{ flex: 1, backgroundColor: '#C2193D' }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
     <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >

    
      {/* LOGO */}
      <Image
        source={require('../../assets/images/logo-branca.png')}
        style={{
          position: 'absolute',
          top: 45,
          alignSelf: 'center',
          width: 110,
          height: 60,
          zIndex: 10,
        }}
        resizeMode="contain"
      />

      {/* IMAGEM */}
      <Image
        source={require('../../assets/images/robofrosa.png')}
        style={{
          width: '100%',
          height: 300,
          marginTop: 85,
        }}
        resizeMode="cover"
      />

      {/* CONTAINER */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#8A122D',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 32,
          paddingTop: 26,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontFamily: 'Livvic_400Regular',
            fontSize: 20,
            letterSpacing: -0.9,
            color: '#F4F0E2',
            textAlign: 'center',
            marginBottom: 26,
          }}
        >
          Bem Vindo!
        </Text>

        {/* EMAIL */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              position: 'absolute',
              bottom: -6,
              left: 0,
              right: 0,
              height: 60,
              backgroundColor: '#D1CDC0',
              borderRadius: 18,
            }}
          />

          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="#F4F0E2"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
            fontFamily: 'Livvic_400Regular',
            fontSize: 18,
            backgroundColor: '#9A203D',
            borderRadius: 18,
            paddingHorizontal: 18,
            paddingVertical: 16,
            color: '#F4F0E2',
            borderWidth: 2,
            borderColor: '#F4F0E2',
            }}
          />
        </View>

        {/* SENHA */}
        <View style={{ marginBottom: 20 }}>
          <View
            style={{
              position: 'absolute',
              bottom: -6,
              left: 0,
              right: 0,
              height: 60,
              backgroundColor: '#D1CDC0',
              borderRadius: 18,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#9A203D',
              borderWidth: 2,
              borderColor: '#F4F0E2',
              borderRadius: 18,
              paddingHorizontal: 18,
            }}
          >
            <TextInput
              placeholder="Digite sua senha"
              placeholderTextColor="#F4F0E2"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={{
                fontFamily: 'Livvic_400Regular',
                flex: 1,
                color: '#F4F0E2',
                paddingVertical: 16,
              }}
            />

            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={26}
                color="#F4F0E2"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* CHECKBOX + ESQUECEU */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 28,
          }}
        >
          <TouchableOpacity
            onPress={() => setRemember(!remember)}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 5,
                backgroundColor: '#ECE2D6',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {remember && (
                <Ionicons name="checkmark" size={20} color="#A88D68" />
              )}
            </View>

            <Text
              style={{
                fontFamily: 'Livvic_400Regular',
                color: '#F8F2EB',
                marginLeft: 10,
                fontSize: 17,
              }}
            >
              Lembre-se
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: 'Livvic_400Regular',
              color: '#F8F2EB',
              fontSize: 16,
            }}
          >
            Esqueceu sua senha?
          </Text>
        </View>

        {/* BOTÃO */}
        <View style={{ marginBottom: 30 }}>
          <View
            style={{
              position: 'absolute',
              bottom: -12,
              left: 0,
              right: 0,
              height: 60,
              backgroundColor: '#4D001A',
              borderRadius: 18,
            }}
          />

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleLogin}
            style={{
              backgroundColor: '#C7074F',
              paddingVertical: 16,
              paddingHorizontal: 18,
              borderRadius: 18,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'Livvic_600SemiBold',
                color: '#FFFFFF',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>

        {/* CADASTRO */}
        <Text
          style={{
            fontFamily: 'Livvic_400Regular',
            color: '#F8F2EB',
            textAlign: 'center',
            fontSize: 16,
          }}
        >
          Ainda não possui conta?{' '}
          <Text
            style={{
              fontFamily: 'Livvic_600SemiBold',
              fontWeight: 'bold',
            }}
          >
            Cadastre-se
          </Text>
        </Text>
      </View>
       </ScrollView>
     </KeyboardAvoidingView>
  );
}