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
    { name: "1. Single Alphabet Letters", id : 1},
    { name: "2. Combined Alphabet Letters", id : 2},
    { name: "3. Disconnected Letters", id : 3 },
    { name: "4. Diacritical Marks (Vowels)", id : 4 },
    { name: "5. Tanween (Double Diacritics)", id : 5 },
    { name: "6. Exercise 1", id : 6},
    { name: "7. Small Alif, Yaa, and Waaw", id : 7 },
    { name: "8. Letters of Elongation and Softness", id : 8},
    { name: "9.Exercise 2", id : 9 },
    { name: "10. Sukoon (Vowelless Marks)", id : 10 },
    { name: "11. Exercise 3", id : 11 },
    { name: "12. Shaddah (Gemination Mark)", id: 12 },
    { name: "13. Exercise 4", id : 13 },
    { name: "14. Exercise 5", id : 14},
    { name: "15. Exercise 6", id : 15 },
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
