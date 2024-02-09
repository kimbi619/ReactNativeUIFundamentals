import { Dimensions, Keyboard, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import WebView from 'react-native-webview'

const SCREEN_HEIGHT = Dimensions.get('window').height

export default function AppBrowser() {
    const [searchString, setSearchString] = useState('')
    const [loadError, setLoadError] = useState(false)
    const [search, setSearch] = useState('')
    const [isloading, setIsloading] = useState(false)
    const [isTyping, setIsTyping] = useState(false)

    const handleSearchFocus = () => {
        setIsTyping(true)
    }
    
    const catchError = (event) => {

    }

    const pageRouteHandler = (event) => {

    }
    const manageScroll = (event) => {

    }
    const pageReload = () => {

    }
    const goBack = () => {

    }
    const redoTab = () => {

    }
    const copy = () => {

    }
    const newTab = () => {

    }
    const exitBrowser = () => {

    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.urlBar}>
            <Pressable>
                <Ionicons name="ios-lock-closed" size={15} color={'#45ba8b'} />
            </Pressable>
            <TextInput
                value={searchString}
                onChangeText={text => setSearchString(text)}
                selectTextOnFocus
                cursorColor={'#000'}
                style={styles.inputField}
                onFocus={ handleSearchFocus}
                onSubmitEditing={() => searchUrl()}
                selectionColor={'#cc99ff44'}
            />
            {
                isTyping
                ?
                <Pressable >
                    <Ionicons name='arrow-forward-circle' size={25} color={"#45ba8b"} />
                </Pressable>
                :
                <Pressable >
                    <Ionicons name='arrow-forward-circle' size={25} color={"#45ba8b"} />
                </Pressable>
            }
        </View>
        <View style={styles.browserWrapper}>
            {
                loadError
                ?
                <View style={styles.non_found}>
                    <Text style={styles.sub_title}>This site can't be reached</Text>
                    <Text style={styles.text}>Sorry you cannot react <Text style={{ fontWeight: 600, textDecorationLine: 'underline' }} >{search}</Text>Chaec your internet connection and try again</Text>
                    <Pressable style={styles.reload} onPress={pageReload} >
                        <Ionicons size={25} color={'purple'} name="ios-refresh-circle" />
                    </Pressable>
                </View>
                :
                <WebView
                    source={{ uri: search }}
                    originWhitelist={['*']}
                    mixedContentMode='never'
                    onError={e => {catchError(e.nativeEvent )}}
                    onLoadStart={e => {pageRouteHandler(e.nativeEvent )}}
                    onLoadEnd={e => { setIsloading(false)}}
                    onLoadProgress={e => { setIsloading(true)}}
                    onScroll={e => { manageScroll(e.nativeEvent)}}
                />
            }
        </View>
        
        <View style ={styles.conroller}>
            { 
            isloading && <View style={styles.loadingAnimation} />
            }
            <View style={styles.buttonWrapper}>
                <Pressable onPress={ goBack } style={styles.ctrBtn}><Ionicons name="ios-arrow-back" size={24} color={'black'} /></Pressable>
                <Pressable onPress={ redoTab } style={styles.ctrBtn}><Ionicons name="ios-arrow-forward" size={24} color={'black'} /></Pressable>
                <Pressable onPress={ copy } style={styles.ctrBtn}><Ionicons name="copy" size={24} color={'black'} /></Pressable>
                <Pressable onPress={ newTab } style={styles.ctrBtn}><Ionicons name="add-circle" size={24} color={'black'} /></Pressable>
                <Pressable onPress={ exitBrowser } style={styles.ctrBtn}><Ionicons name="close-sharp" size={24} color={'crimson'} /></Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    urlBar: {
        backgroundColor: '#f5f5ff',
        borderRadius: 6, 
        marginHorizontal: 10, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
    },
    inputField: {
        height: '100%',
        width: '85%',
        fontSize: 16
    },
    browserWrapper: {
        width: '100%',
        height: SCREEN_HEIGHT - 145,
        paddingTop: 5,
    },
    conroller: {
        borderTopColor: '#000',
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        height: 60,
        backgroundColor: '#fcfcff',
    },
    buttonWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%'
    },
    loadingAnimation: {
        width: Dimensions.get('window').width,
        height: 3,
        backgroundColor: '#0099ff',
        position: 'absolute',
        top: -2,
        left: 0
    }
    
    
})