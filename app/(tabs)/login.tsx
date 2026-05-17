import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { colors } from '@/components/mobo-ui';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [email, setEmail] = useState('jaque@gmail.com');
  const [password, setPassword] = useState('123456');
  const { width, height } = useWindowDimensions();
  const screenWidth = Math.min(width, 390);
  const horizontalPadding = screenWidth * 0.1;

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

    router.replace('/(tabs)/home');
  }

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar style="light" backgroundColor={colors.red} />
      <ScrollView
        contentContainerStyle={[styles.scrollContent, { minHeight: Math.max(height, 844) }]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.phoneFrame, { width: screenWidth }]}>
          <Image
            source={require('../../assets/images/logo-branca.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.hero}>
            <Image
              source={require('../../assets/images/robofrosa.png')}
              style={styles.heroImage}
              resizeMode="stretch"
            />
          </View>

          <View
            style={[
              styles.formPanel,
              {
                paddingHorizontal: horizontalPadding,
              },
            ]}
          >
            <Text style={styles.title}>
              Bem Vindo!
            </Text>

            <View style={styles.fieldFrame}>
              <View style={styles.fieldDrop} />
              <View style={styles.field}>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="jaque@gmail.com"
                  placeholderTextColor="#E5DFD0"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.fieldFrame}>
              <View style={styles.fieldDrop} />
              <View style={styles.field}>
                <View style={styles.passwordRow}>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••"
                    placeholderTextColor="#F8F2EB"
                    secureTextEntry={!showPassword}
                    style={[styles.input, styles.passwordInput]}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setShowPassword((value) => !value)}
                    style={styles.eyeButton}
                  >
                    <Ionicons
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      size={31}
                      color={colors.cream}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.actionsRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setRememberMe((value) => !value)}
                style={styles.rememberButton}
              >
                <View style={styles.checkbox}>
                  {rememberMe && <Ionicons name="checkmark" size={30} color="#A98F65" />}
                </View>
                <Text style={styles.helperText}>Lembre-se</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.helperText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonShadow}>
              <TouchableOpacity activeOpacity={0.85} onPress={handleLogin} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => router.push('/(tabs)/cadastro')}
              style={styles.signupButton}
            >
              <Text style={styles.signupText}>
                Ainda não possui conta?{' '}
                <Text style={styles.signupStrong}>
                  Cadastre-se
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.red,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: colors.red,
  },
  phoneFrame: {
    flexGrow: 1,
    alignSelf: 'center',
    backgroundColor: colors.red,
  },
  logo: {
    position: 'absolute',
    top: 49,
    alignSelf: 'center',
    width: 88,
    height: 49,
    zIndex: 4,
  },
  hero: {
    height: 366,
    marginTop: 116,
    overflow: 'hidden',
    zIndex: 2,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  formPanel: {
    flex: 1,
    marginTop: -93,
    minHeight: 470,
    backgroundColor: colors.wine,
    borderTopLeftRadius: 43,
    borderTopRightRadius: 43,
    paddingTop: 44,
    paddingBottom: 36,
    zIndex: 1,
  },
  title: {
    color: colors.cream,
    fontFamily: 'Livvic_400Regular',
    fontSize: 25,
    lineHeight: 33,
    textAlign: 'center',
    marginBottom: 36,
  },
  fieldFrame: {
    minHeight: 70,
    marginBottom: 20,
  },
  fieldDrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 62,
    borderRadius: 17,
    backgroundColor: '#E1DFCF',
  },
  field: {
    minHeight: 62,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: colors.cream,
    backgroundColor: '#9C1E3B',
    justifyContent: 'center',
  },
  input: {
    minHeight: 58,
    color: '#E5DFD0',
    fontFamily: 'Livvic_400Regular',
    fontSize: 24,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  passwordRow: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  passwordInput: {
    flex: 1,
    color: colors.cream,
    letterSpacing: 7,
  },
  eyeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 1,
    marginBottom: 43,
  },
  rememberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 29,
    height: 29,
    borderRadius: 6,
    backgroundColor: '#E5DFD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  helperText: {
    color: '#E5DFD0',
    fontFamily: 'Livvic_400Regular',
    fontSize: 19,
    lineHeight: 26,
  },
  buttonShadow: {
    borderRadius: 15,
    backgroundColor: colors.wineDark,
    paddingBottom: 8,
  },
  loginButton: {
    minHeight: 62,
    borderRadius: 15,
    backgroundColor: '#C7034B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: colors.white,
    fontFamily: 'Livvic_700Bold',
    fontSize: 22,
  },
  signupButton: {
    marginTop: 30,
  },
  signupText: {
    textAlign: 'center',
    color: '#DDD8C9',
    fontFamily: 'Livvic_400Regular',
    fontSize: 21,
    lineHeight: 28,
  },
  signupStrong: {
    color: colors.cream,
    fontFamily: 'Livvic_700Bold',
  },
});
