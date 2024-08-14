import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { ProgressBar } from "react-native-paper";


const Chapters= ({navigation}) => {

  const chapters = [
    { name: "1. Single Alphabet Letters", screen: "Lessons" },
    { name: "2. Combined Alphabet Letters", screen: "Lessons" },
    { name: "3. Disconnected Letters", screen: "Chapter3" },
    { name: "4. Diacritical Marks (Vowels)", screen: "Chapter4" },
    { name: "5. Tanween (Double Diacritics)", screen: "Chapter5" },
    { name: "6. Exercise 1", screen: "Exercise1" },
    { name: "7. Small Alif, Yaa, and Waaw", screen: "Chapter6" },
    { name: "8. Letters of Elongation and Softness", screen: "Chapter7" },
    { name: "9.Exercise 2", screen: "Exercise2" },
    { name: "10. Sukoon (Vowelless Marks)", screen: "Chapter8" },
    { name: "11. Exercise 3", screen: "Exercise3" },
    { name: "12. Shaddah (Gemination Mark)", screen: "Chapter9" },
    { name: "13. Exercise 4", screen: "Exercise4" },
    { name: "14. Exercise 5", screen: "Exercise5" },
    { name: "15. Exercise 6", screen: "Exercise6" },
  ];

  const completedChapters = 5; // Replace this with the actual count of completed chapters
  const totalChapters = chapters.length;
  const progress = completedChapters / totalChapters;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Edulingo</Text>
      </View>

      {/* Fixed Chapters Heading with Progress Bar */}
      <View style={styles.chaptersHeaderContainer}>
        <Text style={styles.chaptersHeaderText}>Chapters</Text>
        <View style={styles.progressContainer}>
          <ProgressBar
            progress={progress}
            color={"#96E5FE"}
            style={styles.progressBar}
          />
          <Text style={styles.progressText}>
            {Math.round(progress * 100)}%
          </Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.content}>
        {chapters.map((chapter, index) => (
          <TouchableOpacity
            key={index}
            style={styles.chapterButton}
            onPress={() => navigation.navigate("Lessons")}
          >
            <Text style={styles.chapterText}>{chapter.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Edulingo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  header: {
    backgroundColor: Color.colorPlum,
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorBlack,
  },
  chaptersHeaderContainer: {
    flexDirection: "row",
    backgroundColor: Color.colorPlum,
    paddingVertical: 15,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  chaptersHeaderText: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorBlack,
    flex: 1,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorBlack,
    marginRight: 8,
  },
  progressBar: {
    height: 10,
    width: 100,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  chapterButton: {
    backgroundColor: "#FFF",
    borderRadius: Border.br_xl,
    marginBottom: 10,
  },
  chapterText: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorBlack,
  },
  footer: {
    backgroundColor: Color.colorPlum,
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorBlack,
  },
});


export default Chapters;
