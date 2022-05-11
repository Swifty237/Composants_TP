import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={require('./assets/rover.jpg')}/>
      <View style={styles.text}>
        <Text style={styles.title}>Title: Michael FARADAY</Text>
        <Text style={styles.description}>Description: Michael Faraday (Newington, 22 septembre 1791 - Hampton Court, 25 août 1867) est un physicien et un chimiste britannique.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
  },

  picture: {
    flex: 1, 
  },

  title: {
    margin: 10
  },

  description: {
    margin: 10
  },

  text: {
    flex: 1
  }
});
