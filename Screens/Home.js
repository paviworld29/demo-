import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';


const Home = ({navigation}) => {

  const [data, SetData] = useState([]);
  const [listData,setListData] = useState([]);

  // console.log('listData', listData?.length > data?.length ? listData?.length : data?.length);

  useEffect(() => {
    getDatafromAPI();
  }, []);

  useEffect(()=>{
    retrieveData();
  },[]);

  const getDatafromAPI = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => SetData(data))
    .catch(error => console.error('>>>',error));
  };

  // const storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem('@Form_list', JSON.stringify(data));
  //   } catch (e) {
  //     console.log('error', e);
  //   }
  // };

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('@Form_list');
      if (data !== null) {
        setListData(JSON.parse(data));
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const Item = ({body,id,title,userId}) => (
    <TouchableOpacity style={styles.item}  onPress={() => navigation.navigate('Foam', 
    listData?.length > data?.length ? listData : data
    )}> 
      <View style={{
        height:40,
        width:40,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor: 'red',
        borderRadius: 20,
        right:19,
        backgroundColor:'#f9c2ff'
      }}>
        <Text style={{fontSize:18,color:'red'}}> {id} </Text>
      </View>
      <View>
        <Text style={{color:'blue',fontSize:15,fontWeight:'900'}}>{title}</Text>
        <View style={{borderWidth:0.5,marginVertical:10,backgroundColor:'red'}}/>
        <Text style={{color:'black',fontSize:13}}> {body} </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listData}
          renderItem={({item}) => <Item 
          title={item.title}
          body={item.body}
          id={item.id}
          userId={item.userId}
          />
        }
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderWidth:1,
    borderColor:'red',
    backgroundColor: '#f9c2ff',
    flexDirection:'row',
    paddingVertical: 20,
    paddingRight:50,
    marginVertical: 8,
    marginHorizontal: 25,
    borderRadius:15
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
