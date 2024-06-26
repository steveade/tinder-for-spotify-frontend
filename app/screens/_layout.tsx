import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '../components/sidebar';
import DrawerItems from '../constants/DrawerItems';
import { View, Button, Image, _View } from 'react-native';
import { Component } from 'react';
import * as icons from '../../assets/svg/exports'
import { transform } from 'typescript';


export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={props => <CustomDrawer {...props} containerStyle={{ paddingVertical: 0 }} />}
        screenOptions={{
          drawerContentStyle: {
            backgroundColor: "#121212",
          },
          sceneContainerStyle: {
            backgroundColor: "#121212"
          },
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      >
        {DrawerItems.map(drawer => (
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
            options={{
              ...drawer.options,
              drawerIcon: () =>
                drawer.options.title === 'Profile' ?
                        <View className='w-9 h-9 rounded-md border-[#EFEFEF33] bg-[#EFEFEF1A] p-1.5 items-center justify-center' >
                          <Image source={icons.ProfileIcon} />
                        </View>
                  : drawer.options.title === 'Chats' ?
                        <View className='w-9 h-9 rounded-md border-[#EFEFEF33] bg-[#EFEFEF1A] p-1.5 items-center justify-center' >
                          <Image source={icons.ChatIcon} />
                        </View>
                    : 
                        <View className='w-9 h-9 rounded-md border-[#EFEFEF33] bg-[#EFEFEF1A] p-1.5 items-center justify-center' >
                          <Image source={icons.SettingsIcon} />
                        </View>,
              drawerItemStyle: {
                borderWidth: 1,
                marginHorizontal: 0,
                borderColor: '#B3B3B333',
                borderRadius: 10,
                padding: 5,
                flex: 1,
              },
              drawerActiveTintColor: "#121212",
            }}
          />
        ))}
      </Drawer>

    </GestureHandlerRootView>
  );
}
