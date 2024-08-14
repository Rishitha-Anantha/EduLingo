import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import SQLite from "react-native-sqlite-storage";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

// Open the SQLite database
const db = SQLite.openDatabase(
  { name: "Arabic_Language.db", location: "/assets/db/Arabic_Language.db" },
  () => {
    console.log("Database opened successfully");
  },
  (error) => {
    console.log("Error opening database: ", error);
  }
);

// Function to fetch lessons from the database based on the category number
const fetchLessons = async (categoryNo) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT ArabicText FROM Arabic_Learning_data WHERE CategoryNo = ?`,
        [categoryNo],
        (tx, results) => {
          const len = results.rows.length;
          if (len > 0) {
            let lessons = [];
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              lessons.push({
                id: i,
                title: row.ArabicText
              });
            }
            resolve(lessons);
          } else {
            resolve([]);
          }
        },
        (error) => {
          console.log("Error fetching lessons: ", error);
          reject([]);
        }
      );
    });
  });
};


const Lessons = ({ route }) => {
  const { chapterId } = route.params;
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const loadLessons = async () => {
      const lessons = await fetchLessons(chapterId);
      setLessons(lessons);
    };
    loadLessons();
  }, [chapterId]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.edulingo}>Edulingo</Text>
      </View>

      {/* Chapter Title */}
      <View style={styles.chapterHeader}>
        <Text style={styles.chapterTitle}>Chapter {chapterId}</Text>
        <Text style={styles.lessonProgress}>
          Total: {lessons.length} Lessons
        </Text>
      </View>

      {/* Lessons List */}
      <ScrollView style={styles.lessonsContainer}>
        {lessons.map((lesson) => (
          <View key={lesson.id} style={styles.lesson}>
            <Text style={styles.lessonText}>{lesson.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    width: "100%",
    padding: 20,
    backgroundColor: Color.colorPlum,
    alignItems: "center",
  },
  edulingo: {
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.inknutAntiquaRegular,
  },
  chapterHeader: {
    padding: 20,
    backgroundColor: Color.colorPlum,
  },
  chapterTitle: {
    fontSize: FontSize.size_4xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.inknutAntiquaRegular,
    marginBottom: 10,
  },
  lessonProgress: {
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    fontFamily: FontFamily.inknutAntiquaRegular,
  },
  lessonsContainer: {
    padding: 20,
  },
  lesson: {
    backgroundColor: Color.colorLightGray,
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  lessonText: {
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.inknutAntiquaRegular,
    marginBottom: 10,
  },
  lessonImage: {
    width: 100,
    height: 100,
  },
});

export default Lessons;
