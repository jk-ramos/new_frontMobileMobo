import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Perfil() {
    return (
        <View style={{ flex: 1, backgroundColor: '#F8F2EB', padding: 24 }}>
            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <View
                    style={{
                        width: 110,
                        height: 110,
                        borderRadius: 55,
                        backgroundColor: '#8A122D',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 16,
                    }}
                >
                    <Ionicons name="person" size={54} color="#F8F2EB" />
                </View>

                <Text
                    style={{
                        fontFamily: 'Livvic_700Bold',
                        fontSize: 26,
                        color: '#2B2B2B',
                    }}
                >
                    Usuário MOBO
                </Text>

                <Text
                    style={{
                        fontFamily: 'Livvic_400Regular',
                        fontSize: 16,
                        color: '#8A8A8A',
                        marginTop: 6,
                    }}
                >
                    usuario@email.com
                </Text>
            </View>

            <View style={{ marginTop: 40 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 18,
                        padding: 18,
                        marginBottom: 14,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons name="person-outline" size={24} color="#8A122D" />
                    <Text
                        style={{
                            fontFamily: 'Livvic_600SemiBold',
                            fontSize: 17,
                            color: '#2B2B2B',
                            marginLeft: 14,
                        }}
                    >
                        Editar perfil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#FFFFFF',
                        borderRadius: 18,
                        padding: 18,
                        marginBottom: 14,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons name="settings-outline" size={24} color="#8A122D" />
                    <Text
                        style={{
                            fontFamily: 'Livvic_600SemiBold',
                            fontSize: 17,
                            color: '#2B2B2B',
                            marginLeft: 14,
                        }}
                    >
                        Configurações
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#8A122D',
                        borderRadius: 18,
                        padding: 18,
                        marginTop: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
                    <Text
                        style={{
                            fontFamily: 'Livvic_700Bold',
                            fontSize: 17,
                            color: '#FFFFFF',
                            marginLeft: 10,
                        }}
                    >
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}