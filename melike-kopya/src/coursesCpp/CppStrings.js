import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function CppStrings({ navigation }) {
  const handlePress1 = () => {
    navigation.navigate("C++ Strings");
  };
  const handlePress2 = () => {
    navigation.navigate("String Birleştirme");
  };
  const handlePress3 = () => {
    navigation.navigate("String Uzunluğu");
  };
  const handlePress4 = () => {
    navigation.navigate("Stringlerde Erişim");
  };
  const handlePress5 = () => {
    navigation.navigate("String Karakterlerini Değiştirmek");
  };
  const handlePress6 = () => {
    navigation.navigate("Özel Karakterler");
  };
  return (
    <ScrollView> 
      <TouchableOpacity onPress={handlePress1}>
      <Text style={styles.title}>C++ Strings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress2}>
      <Text style={styles.title}>String Birleştirme</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress3}>
      <Text style={styles.title}>String Uzunluğu</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress4}>
      <Text style={styles.title}>Stringlerde Erişim</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress5}>
      <Text style={styles.title}>String Karakterlerini Değiştirmek</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress6}>
      <Text style={styles.title}>Özel Karakterler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e9967a",
  },
});