import * as React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import * as SQLite from 'expo-sqlite';
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const db = SQLite.openDatabase('Arabic_Language.db');

const Lessons = ({ route }) => {
  const { chapterId } = route.params; // Getting the chapter ID passed from the previous screen
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT ArabicText FROM Arabic_Learning_data WHERE CategoryNo = ?',
        [chapterId],
        (_, { rows }) => {
          setLessons(rows._array);
        },
        (_, error) => {
          console.error(error);
        }
      );
    });
  };

  return (
    <View style={[styles.individualLevel, styles.rectangleGroupBg]}>
      <View style={[styles.textParent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textTypo6]}>{`
`}</Text>
        <Text style={[styles.edulingo, styles.textTypo6]}>Edulingo</Text>
        {/* Add other UI components as needed */}
      </View>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={styles.rectangleView} />
        <Text style={[styles.home, styles.textTypo6]}>Home</Text>
      </View>
      
      {/* Dynamically render lessons based on the fetched data */}
      {lessons.map((lesson, index) => (
        <View key={index} style={[styles.lessonContainer, styles.individualChildLayout]}>
          <Text style={[styles.lessonText, styles.textTypo5]}>{lesson.ArabicText}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  // Add the previous styles here
  lessonContainer: {
    backgroundColor: Color.colorSpringgreen,
    marginBottom: 10,
    padding: 20,
    borderRadius: Border.br_xl,
  },
  lessonText: {
    textAlign: "center",
    fontFamily: FontFamily.inknutAntiquaMedium,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  // Add the rest of your existing styles here...
});

export default Lessons;