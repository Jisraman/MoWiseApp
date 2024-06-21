import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faWallet, faUser, faGlobe, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import Home from '../screens/Home/Index'
import About from '../screens/About/Index'
import Profile from '../screens/Profile/Index'
import Services from '../screens/Services/Index'
import Wallet from '../screens/Wallet/Index'

import { 
  Text,Tab, TabView
  } from '@rneui/themed';

import {
    
    View,
    TouchableOpacity,
    ActivityIndicator
  } from 'react-native';

  

function Menu() {
  const [index, setIndex] = React.useState(2);
  
  return (
    <View style={{height:'100%', margin:"0%", padding:"0%"}}>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <About/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Services/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Home/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Wallet/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
          <Profile/>
        </TabView.Item>
      </TabView>

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          containerStyle={() => ({
            backgroundColor: "#026197"
          })}
          icon={<FontAwesomeIcon icon={faGlobe} size={40}/>}
        />
        <Tab.Item
          containerStyle={() => ({
            backgroundColor: "#026197"
          })}
          icon={<FontAwesomeIcon icon={faHandshakeAngle} size={40}/>}
        />
        <Tab.Item
          containerStyle={() => ({
            backgroundColor: "#026197"
          })}
          icon={<FontAwesomeIcon icon={faHome} size={40}/>}
        />
        <Tab.Item
          containerStyle={() => ({
            backgroundColor: "#026197"
          })}
          icon={<FontAwesomeIcon icon={faWallet} size={40}/>}
        />
        <Tab.Item
          containerStyle={() => ({
            backgroundColor: "#026197"
          })}
          icon={<FontAwesomeIcon icon={faUser} size={40}/>}
        />
      </Tab>

    </View>
  );
}
export default Menu;