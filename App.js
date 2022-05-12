import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import data from './assets/tp.json';

export default function App() {
  return (
    data.map((obj) => (

      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.picture} source={{uri: obj.img}}/>
          <View style={styles.text}>
            <Text style={styles.title}>{obj.title}</Text>
            <Text style={styles.description}>{obj.desc}</Text>
          </View>
        </View>
      </ScrollView>
      
    ))
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    borderWidth: 2,
    margin: 10
  },

  picture: {
    flex: 1,
    margin: 10 
  },

  title: {
    margin: 10
  },

  description: {
    margin: 10
  },

  text: {
    flex: 1,
  }
});
