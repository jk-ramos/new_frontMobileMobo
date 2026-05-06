import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useCallback, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  Image,
  ImageBackground,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function Controle() {
    const leftJoystick = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [garraCommand, setGarraCommand] = useState('Garra parada');

    const rightJoystick = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [esteiraCommand, setEsteiraCommand] = useState('Esteira parada');

    const focoPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const [detectionResult, setDetectionResult] = useState('');

    const leftPanResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,

            onPanResponderMove: (_, gesture) => {
                const maxDistance = 35;

                const x = Math.max(-maxDistance, Math.min(gesture.dx, maxDistance));
                const y = Math.max(-maxDistance, Math.min(gesture.dy, maxDistance));

                leftJoystick.setValue({ x, y });

                // DETECTAR DIREÇÃO
                let direction = 'parado';

                if (Math.abs(x) > Math.abs(y)) {
                    if (x > 10) direction = 'direita';
                    else if (x < -10) direction = 'esquerda';
                } else {
                    if (y > 10) direction = 'baixo';
                    else if (y < -10) direction = 'cima';
                }

                console.log('Direção:', direction);
                setGarraCommand(`Garra: ${direction}`);
            },

            onPanResponderRelease: () => {
                setGarraCommand('Garra parada');
                Animated.spring(leftJoystick, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    const rightPanResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,

            onPanResponderMove: (_, gesture) => {
                const maxDistance = 35;

                const x = Math.max(-maxDistance, Math.min(gesture.dx, maxDistance));
                const y = Math.max(-maxDistance, Math.min(gesture.dy, maxDistance));

                rightJoystick.setValue({ x, y });

                let direction = 'parada';

                if (Math.abs(x) > Math.abs(y)) {
                    if (x > 10) direction = 'direita';
                    else if (x < -10) direction = 'esquerda';
                } else {
                    if (y > 10) direction = 'ré';
                    else if (y < -10) direction = 'frente';
                }

                setEsteiraCommand(`Esteira: ${direction}`);
            },

            onPanResponderRelease: () => {
                setEsteiraCommand('Esteira parada');

                Animated.spring(rightJoystick, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    useFocusEffect(
        useCallback(() => {
            ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
            );

            return () => {
                ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                );
            };
        }, [])
    );

    async function handleUpload() {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permission.granted) {
            Alert.alert(
                'Permissão necessária',
                'Permita acesso à galeria para escolher uma imagem.'
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled) {
            Alert.alert('Imagem selecionada', 'Upload preparado com sucesso.');
        }
    }

    function simulateDetection() {
        setDetectionResult('');
        Animated.sequence([
            Animated.timing(focoPosition, {
                toValue: { x: -120, y: -40 },
                duration: 700,
                useNativeDriver: false,
            }),
            Animated.timing(focoPosition, {
                toValue: { x: 90, y: -20 },
                duration: 700,
                useNativeDriver: false,
            }),
            Animated.timing(focoPosition, {
                toValue: { x: 60, y: 70 },
                duration: 700,
                useNativeDriver: false,
            }),
            Animated.timing(focoPosition, {
                toValue: { x: 0, y: 0 },
                duration: 700,
                useNativeDriver: false,
            }),
        ]).start(() => {
            setDetectionResult('Lichia detectada • Madura');

            setTimeout(() => {
                setDetectionResult('');
            }, 7000);
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <ImageBackground
                source={require('../../assets/images/controle-bg.png')}
                style={{
                    flex: 1,
                    width: '100%',
                    height: '100%',
                }}
                imageStyle={{
                    width: '100%',
                    height: '100%',
                }}
                resizeMode="cover"
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Animated.Image
                        source={require('../../assets/images/foco.png')}
                        style={{
                            width: 140,
                            height: 140,
                            resizeMode: 'contain',
                            transform: [
                                { translateX: focoPosition.x },
                                { translateY: focoPosition.y },
                            ],
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            top: 20,
                            left: 20,
                            backgroundColor: 'rgba(0,0,0,0.45)',
                            paddingHorizontal: 14,
                            paddingVertical: 8,
                            borderRadius: 12,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Livvic_600SemiBold',
                                fontSize: 16,
                                color: '#FFFFFF',
                            }}
                        >
                            {garraCommand}
                        </Text>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            backgroundColor: 'rgba(0,0,0,0.45)',
                            paddingHorizontal: 14,
                            paddingVertical: 8,
                            borderRadius: 12,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Livvic_600SemiBold',
                                fontSize: 16,
                                color: '#FFFFFF',
                            }}
                        >
                            {esteiraCommand}
                        </Text>
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            left: 30,
                            bottom: 40,
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                left: 30,
                                bottom: 40,
                            }}
                        >
                            {/* BASE (não mexe) */}
                            <Image
                                source={require('../../assets/images/joystick-esquerdo.png')}
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: 'contain',
                                }}
                            />

                            {/* BOTÃO (se move) */}
                            <Animated.View
                                {...leftPanResponder.panHandlers}
                                style={{
                                    position: 'absolute',
                                    top: 35,
                                    left: 35,
                                    transform: [
                                        { translateX: leftJoystick.x },
                                        { translateY: leftJoystick.y },
                                    ],
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/joystick-esquerdo.png')}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        opacity: 0.9,
                                    }}
                                />
                            </Animated.View>
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            right: 30,
                            bottom: 40,
                        }}
                    >
                        <Animated.View
                            {...rightPanResponder.panHandlers}
                            style={{
                                transform: [
                                    { translateX: rightJoystick.x },
                                    { translateY: rightJoystick.y },
                                ],
                            }}
                        >
                            <Image
                                source={require('../../assets/images/joystick-direito.png')}
                                style={{
                                    width: 100,
                                    height: 100,
                                    resizeMode: 'contain',
                                }}
                            />
                        </Animated.View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 20,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 24,
                        }}
                    >
                        <TouchableOpacity onPress={simulateDetection}>
                            <Image
                                source={require('../../assets/images/camera.png')}
                                style={{ width: 48, height: 48, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('/calendario')}>
                            <Image
                                source={require('../../assets/images/calend.png')}
                                style={{ width: 48, height: 48, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleUpload}>
                            <Image
                                source={require('../../assets/images/uploads.png')}
                                style={{ width: 48, height: 48, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {detectionResult !== '' && (
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 100,
                            alignSelf: 'center',
                            backgroundColor: 'rgba(0,0,0,0.45)',
                            width: 120,
                            paddingVertical: 8,
                            borderRadius: 12,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 6 },
                            shadowOpacity: 0.2,
                            shadowRadius: 10,
                            elevation: 6,
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Livvic_700Bold',
                                fontSize: 12,
                                color: '#FFFFFF',
                                textAlign: 'center',
                            }}
                        >
                            {detectionResult}
                        </Text>
                    </View>
                )}
            </ImageBackground>
        </View>
    );
}