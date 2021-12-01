import React, { useEffect,useState } from 'react';
import { ActivityIndicator,StyleSheet, FlatList, Text, View } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
     

<View style={{flexDirection:'row',justifyContent:"space-between",}}>
<View style={{width :160, height:160, borderRadius:15,justifyContent:'center',alignItems:'center',elevation:15, backgroundColor:"white"}}>
  <View style={{ height:100}}>
{isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.bold}>{item.title}</Text>
          )}
        />
      )}
</View>
</View>
<View style={{width :160, height:160, backgroundColor:"white" , borderRadius:15,justifyContent:'center',alignItems:'center',elevation:15,}}>
<View style={{ height:100}}>
{isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.bold}>{item.releaseYear}</Text>
          )}
        />
      )}
      </View>
</View>
     
    </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    fontSize:13
  },
 
  
  underline: {textDecorationLine: 'underline'}
})