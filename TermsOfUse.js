import React, {useEffect,useState,lazy,Suspense} from "react";
import { // from 'react-native' 
    StyleSheet,
    Text, 
    ScrollView,
    View,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { useTheme } from "../../../contexts/themeContext";
import Vault from "../../../../assets/Imagens/Imagens Vetoriais/vault.svg"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createMainStyles } from "../../Main/mainStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Paragraph({ children, style }) {
    return (
        <Text style={[{ marginBottom: 12, lineHeight: 22 }, style]}>
            {children}
        </Text>
    );
}

function Section ({title, children, titleStyle, style }) {
    return (
        <View style={[{ marginBottom: 24 }, style]}>
            <Text style={[{ marginBottom: 10}, titleStyle]}>
                {title}
            </Text>
            <View>
                {children}
            </View>
        </View>
);
}

function Strong({ children }) {
    return (
        <Text style={{ fontWeight: '600', textDecorationLine: 'underline' }}>
            {children}
        </Text>
    );
}

export default function TermsOfUse ({navigation}) {

    const {theme, themeName} = useTheme();
    const mainStyles = createMainStyles(theme);
    const styles = createStyles(theme,themeName);

    const [showSecureStoreInfo, setShowSecureStoreInfo] = useState(false)
    const [showFirstAccess,setShowFirstAccess] = useState(false)

    useEffect(()=>{
        async function checkFirstAccess(){
            const value = await AsyncStorage.getItem("@vault_firstAccess")
            if(value !== null){
                setShowFirstAccess(true);
            }

        }
        checkFirstAccess()
    },[])

    return (
        <SafeAreaView style={styles.containerBack}>
        <StatusBar backgroundColor={theme.COLORS.backgrounds.top} barStyle={themeName === 'light' ? "dark-content" : "light-content"} />
        <View style={styles.containerWithBorderRadius}>
            <ScrollView style={[mainStyles.container,{marginBottom:30}]} showsVerticalScrollIndicator={false}>
                <Paragraph style={[mainStyles.textBodyMedium,{marginBottom:30}]}>
                    Última atualização: 01 de março de 2026
                </Paragraph>

                <Section
                    title= "Bem-vindo ao MyHomePlus."
                    titleStyle={[mainStyles.textTitleMedium,{alignSelf:'center'}]}
                >
                    <Paragraph style={mainStyles.textBodyMedium}>
                        Ao criar uma conta ou utilizar o aplicativo, você declara que leu, compreendeu e concorda com estes Termos de Uso e com a Política de Privacidade.
                    </Paragraph>
                    <Paragraph style={mainStyles.textBodyMedium}>
                        Caso não concorde com qualquer condição, não utilize o aplicativo.
                    </Paragraph>
                </Section>
                
                <Section
                    title= "1. SOBRE O APLICATIVO"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O MyHomePlus é um aplicativo de gerenciamento doméstico e familiar, podendo incluir funcionalidades como:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Lista e histórico de compras.{'\n'}
                            •  Cofre de senhas.{'\n'}
                            •  Gerenciamento familiar.{'\n'}
                            •  Controle de módulos ativáveis/desativáveis.{'\n'}
                            •  Recursos premium.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            As funcionalidades podem ser atualizadas, modificadas ou descontinuadas a qualquer momento.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "2. CONTROLADOR"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O aplicativo é desenvolvido e administrado por:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            <Text style={mainStyles.textTitleMedium}>
                                    Luiz Antonio da Silva Amaral
                            </Text>{'\n'}
                            <Text style={mainStyles.textTitleMedium}>
                                    Contato:{" "}
                                </Text>luizantonio.dsa@gmail.com
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Nos termos da Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), Luiz Antonio atua como Controlador dos dados pessoais tratados no aplicativo.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "3. CADASTRO E RESPONSABILIDADE DA CONTA"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            Para acessar determinadas funcionalidades, o usuário deverá:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Criar uma conta com e-mail válido.{'\n'}
                            •  Fornecer informações verdadeiras e atualizadas.{'\n'}
                            •  Manter suas credenciais em segurança.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O usuário é integralmente responsável por qualquer atividade realizada em sua conta.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O MyHomePlus não se responsabiliza por acessos indevidos decorrentes de negligência, compartilhamento de senha ou falhas de segurança do próprio dispositivo do usuário.
                        </Paragraph>

                    </View>
                </Section>

                <Section
                    title= "4. TRATAMENTO DE DADOS"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O uso do aplicativo envolve o tratamento de dados pessoais conforme descrito na Política de Privacidade.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O tratamento ocorre com base em:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Execução de contrato (uso do aplicativo).{'\n'}
                            •  Consentimento do usuário.{'\n'}
                            •  Legítimo interesse.{'\n'}
                            •  Cumprimento de obrigações legais.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Os dados podem ser armazenados em infraestrutura fornecida por terceiros, como o Google LLC, por meio da plataforma Firebase.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "5. COFRE DE SENHAS"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O módulo de cofre de senhas destina-se exclusivamente ao uso pessoal do usuário.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            As informações armazenadas nesse módulo são protegidas por criptografia aplicada 
                            no próprio dispositivo do usuário. A chave privada necessária para descriptografia 
                            permanece sob controle exclusivo do titular e não é armazenada nos servidores do MyHomePlus.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O MyHomePlus não possui acesso às chaves privadas dos usuários, nem ao conteúdo armazenado em formato legível.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            A funcionalidade de exportação e importação da chave privada pode estar disponível 
                            apenas para usuários de planos premium. Usuários do plano gratuito poderão não 
                            ter acesso a mecanismos de backup da chave privada.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O usuário reconhece que:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  É responsável pelas informações inseridas.{'\n'}
                            •  Deve manter sua chave privada sob absoluto sigilo.{'\n'}
                            •  A recuperação dos dados depende exclusivamente da posse da chave privada.{'\n'}
                            •  Deve realizar backup seguro da chave privada caso deseje garantir recuperação futura dos dados.{'\n'}
                            •  A perda, troca, formatação ou dano do dispositivo poderá resultar na perda definitiva da chave privada e, consequentemente, das informações armazenadas no Cofre de Senhas.{'\n'}
                            •  Deve manter sua conta protegida.{'\n'}
                            •  Nenhum sistema é absolutamente invulnerável.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O MyHomePlus não se responsabiliza pela impossibilidade de recuperação de dados 
                            decorrente da perda, exclusão ou indisponibilidade da chave privada.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O MyHomePlus adota medidas de segurança, mas não garante proteção absoluta contra 
                            ataques externos, falhas técnicas ou acessos indevidos decorrentes de fatores 
                            fora de seu controle.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "6. USO ADEQUADO"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            É proibido:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Utilizar o aplicativo para fins ilícitos.{'\n'}
                            •  Tentar explorar vulnerabilidades.{'\n'}
                            •  Realizar engenharia reversa.{'\n'}
                            •  Interferir no funcionamento do sistema.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O descumprimento pode resultar em suspensão ou exclusão da conta, sem aviso prévio.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "7. PLANOS PREMIUM"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O aplicativo poderá oferecer funcionalidades pagas.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Nesses casos:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Os valores serão informados previamente.{'\n'}
                            •  O pagamento será processado pela loja oficial Google Play.{'\n'}
                            •  Cancelamentos e reembolsos seguem as regras da plataforma de pagamento.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            A perda de acesso ao plano premium pode ocorrer em caso de cancelamento ou inadimplência.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "8. RETENÇÃO E EXCLUSÃO DE CONTA"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O usuário pode solicitar a exclusão da conta a qualquer momento.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Após a exclusão:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Os dados poderão ser removidos permanentemente.{'\n'}
                            •  Poderão ser mantidos apenas dados necessários para cumprimento de obrigações legais.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Detalhes adicionais estão descritos na Política de Privacidade.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "9. LIMITAÇÃO DE RESPONSABILIDADE"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            O aplicativo é fornecido “como está”.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O MyHomePlus não garante:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Funcionamento ininterrupto.{'\n'}
                            •  Ausência total de falhas.{'\n'}
                            •  Disponibilidade contínua do serviço.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Não se responsabiliza por:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Perda de dados decorrente de falhas externas.{'\n'}
                            •  Problemas causados por uso inadequado.{'\n'}
                            •  Danos indiretos ou lucros cessantes.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "10. PROPRIEDADE INTELECTUAL"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            Todos os direitos relacionados ao aplicativo, incluindo:
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            •  Marca.{'\n'}
                            •  Design.{'\n'}
                            •  Estrutura.{'\n'}
                            •  Código-fonte.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            São de propriedade exclusiva do desenvolvedor.
                        </Paragraph>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            É proibida a reprodução ou distribuição sem autorização expressa.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "11. ALTERAÇÕES DOS TERMOS"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            Estes Termos podem ser atualizados periodicamente.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Em caso de alterações relevantes, o usuário poderá ser notificado pelo aplicativo.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            O uso contínuo após alterações implica aceitação dos novos Termos.
                        </Paragraph>
                    </View>
                </Section>

                <Section
                    title= "12. LEGISLAÇÃO E FORO"
                    titleStyle={mainStyles.textTitleMedium}
                >
                    <View style={mainStyles.cards}>
                        <Paragraph style={mainStyles.textBodyMedium}>
                            Estes Termos são regidos pelas leis da República Federativa do Brasil.
                        </Paragraph>

                        <Paragraph style={mainStyles.textBodyMedium}>
                            Fica eleito o foro do domicílio do usuário, quando aplicável, nos termos da legislação consumerista.
                        </Paragraph>
                    </View>
                </Section>

            </ScrollView>  
        </View>

        </SafeAreaView>
    )
}

const createStyles = (theme,themeName) =>
    StyleSheet.create({
        containerBack: {
            flex: 1,
            backgroundColor: theme.COLORS.backgrounds.top,
            //backgroundColor: 'red',
        },
        containerWithBorderRadius: {
            flex:1,
            //alignItems:'center',
            borderTopRightRadius:15,
            borderTopLeftRadius:15,
            overflow: 'hidden',
            elevation: 0.3,
            backgroundColor: theme.COLORS.backgrounds.main,
            borderWidth:0.3,
            borderColor: themeName === 'light' ? theme.COLORS.common.light_grey : theme.COLORS.backgrounds.Alt,
        },
        button: {
            width:'100%',
            minHeight:40,
            padding:10,
            paddingHorizontal:10,
            alignItems:'center',
            flexDirection: 'row',
            borderRadius:10,
            borderColor:theme.COLORS.borders.input,
            backgroundColor: theme.COLORS.backgrounds.subCard,
            //backgroundColor: 'red',
        },
    })