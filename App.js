/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    View
} from 'react-native';

import update from 'react-native-app-update-for-android';

export default class App extends Component {

    constructor () {
        super();
    }

    handlerUpdateApp = () => {
        update.downloadApp("https://pro-app-qn.fir.im/74fcb140162d207e2f26d8404ab039bd85063184.apk?attname=gxcj_v1.0.apk_1.0.apk&e=1515142173&token=LOvmia8oXF4xnLh0IdH05XMYpH6ENHNpARlmPc-T:JxcNdYEeUrUGpw5LJJHlq6ajhxk=");
    };

    handlerOpenAppStore = () => {
        update.openAPPStore("123456");
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button title="android 下载APK" onPress={this.handlerUpdateApp.bind(this)}/>
                <Button title="iOS 跳转apptore" onPress={this.handlerOpenAppStore.bind(this)}/>
            </View>
        );
    }
}
