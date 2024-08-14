import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Learning = () => {
  return (
    <View style={styles.learningScreen}>
      <Text style={styles.text}>ألف</Text>
      <Image
        style={styles.learningScreenChild}
        contentFit="cover"
        source={require("../assets/frame-3.png")}
      />
      <View style={[styles.rectangleParent, styles.textParentLayout1]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <Text style={[styles.prev, styles.prevTypo]}>Prev</Text>
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <Text style={[styles.next, styles.prevTypo]}>Next</Text>
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <Text style={[styles.chapters, styles.prevTypo]}>Chapters</Text>
      </View>
      <Image
        style={[styles.learningScreenItem, styles.textParentLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Image
        style={styles.learningScreenInner}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={[styles.transcription, styles.prevTypo]}>Transcription</Text>
      <Text style={[styles.score, styles.prevTypo]}>Score</Text>
      <Image
        style={[styles.rectangleIcon, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild1, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild2, styles.learningChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.learningScreenChild3, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-47.png")}
      />
      <Image
        style={[styles.learningScreenChild4, styles.learningChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Image
        style={[styles.learningScreenChild5, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.learningScreenChild6, styles.learningChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.learningScreenChild7, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild8, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild9, styles.learningChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.learningScreenChild10, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.learningScreenChild11, styles.learningChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={[styles.learningScreenChild12, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.learningScreenChild13, styles.learningChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.learningScreenChild14, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild15, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild16, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild17, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.learningScreenChild18, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.learningScreenChild19, styles.learningChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-55.png")}
      />
      <Image
        style={[styles.learningScreenChild20, styles.learningChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.learningScreenChild21, styles.learningChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-49.png")}
      />
      <Image
        style={[styles.learningScreenChild22, styles.learningChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <Image
        style={[styles.learningScreenChild23, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild24, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Image
        style={[styles.learningScreenChild25, styles.learningChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.learningScreenChild26, styles.rectangleViewLayout]}
      />
      <Image
        style={styles.learningScreenChild27}
        contentFit="cover"
        source={require("../assets/rectangle-72.png")}
      />
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame-7.png")}
      />
      <View style={[styles.learningScreenChild28, styles.frameChildLayout]} />
      <Text style={[styles.check, styles.prevTypo]}>Check</Text>
      <Text style={styles.lesson1}>Lesson 1</Text>
      <View style={[styles.textParent, styles.textParentLayout]}>
        <Text style={[styles.text1, styles.text1Typo]}>{`
`}</Text>
        <Text style={[styles.edulingo, styles.prevTypo]}>Edulingo</Text>
      </View>
      <View style={[styles.textGroup, styles.textParentLayout1]}>
        <Text style={[styles.text1, styles.text1Typo]}>{`
`}</Text>
        <Text style={[styles.chapter1, styles.text1Typo]}>
          Chapter 1 : Single Alphabet Letters
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textParentLayout1: {
    width: 393,
    backgroundColor: Color.colorPlum,
    left: 0,
    overflow: "hidden",
  },
  frameChildLayout: {
    height: 52,
    backgroundColor: Color.colorHotpink,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  prevTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  textParentLayout: {
    height: 57,
    position: "absolute",
  },
  learningChildLayout3: {
    height: 1,
    width: 4,
    borderRadius: Border.br_8xs,
    top: 385,
    position: "absolute",
  },
  learningChildLayout2: {
    height: 4,
    width: 1,
    top: 383,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  learningChildLayout1: {
    height: 8,
    top: 381,
    width: 1,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  learningChildLayout: {
    height: 12,
    width: 2,
    top: 378,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 78,
    width: 372,
    backgroundColor: Color.colorGainsboro,
    left: 10,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_xl,
    left: 4,
    textAlign: "left",
    fontFamily: FontFamily.inknutAntiquaRegular,
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    left: 173,
    fontSize: 32,
    fontWeight: "800",
    fontFamily: FontFamily.inknutAntiquaExtraBold,
    textAlign: "center",
    color: Color.colorBlack,
    top: 118,
    position: "absolute",
  },
  learningScreenChild: {
    top: 221,
    left: 26,
    width: 156,
    height: 117,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    left: 7,
    width: 114,
    height: 52,
    backgroundColor: Color.colorHotpink,
    top: 26,
  },
  prev: {
    left: 28,
    width: 64,
    height: 46,
    top: 21,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_5xl,
  },
  frameItem: {
    left: 273,
    width: 114,
    height: 52,
    backgroundColor: Color.colorHotpink,
    top: 26,
  },
  next: {
    left: 298,
    top: 21,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_5xl,
  },
  frameInner: {
    width: 122,
    left: 136,
    height: 52,
    backgroundColor: Color.colorHotpink,
    top: 26,
  },
  chapters: {
    left: 136,
    top: 21,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_5xl,
  },
  rectangleParent: {
    top: 749,
    height: 103,
    position: "absolute",
  },
  learningScreenItem: {
    left: 69,
    borderRadius: 30,
    width: 277,
    top: 357,
  },
  learningScreenInner: {
    left: 53,
    width: 61,
    height: 56,
    top: 357,
    position: "absolute",
  },
  transcription: {
    top: 476,
    left: 9,
  },
  score: {
    top: 600,
    left: 8,
  },
  rectangleIcon: {
    left: 126,
  },
  learningScreenChild1: {
    left: 131,
  },
  learningScreenChild2: {
    left: 136,
  },
  learningScreenChild3: {
    left: 138,
  },
  learningScreenChild4: {
    left: 140,
  },
  learningScreenChild5: {
    left: 142,
  },
  learningScreenChild6: {
    left: 144,
  },
  learningScreenChild7: {
    left: 146,
  },
  learningScreenChild8: {
    left: 151,
  },
  learningScreenChild9: {
    left: 156,
  },
  learningScreenChild10: {
    left: 158,
  },
  learningScreenChild11: {
    left: 160,
  },
  learningScreenChild12: {
    left: 162,
  },
  learningScreenChild13: {
    left: 164,
  },
  learningScreenChild14: {
    left: 166,
  },
  learningScreenChild15: {
    left: 171,
  },
  learningScreenChild16: {
    left: 176,
  },
  learningScreenChild17: {
    left: 181,
  },
  learningScreenChild18: {
    left: 183,
  },
  learningScreenChild19: {
    left: 185,
  },
  learningScreenChild20: {
    left: 187,
  },
  learningScreenChild21: {
    left: 189,
  },
  learningScreenChild22: {
    left: 191,
  },
  learningScreenChild23: {
    left: 192,
  },
  learningScreenChild24: {
    left: 196,
  },
  learningScreenChild25: {
    left: 200,
  },
  rectangleView: {
    top: 528,
  },
  learningScreenChild26: {
    top: 650,
  },
  learningScreenChild27: {
    top: 440,
    left: 141,
    width: 111,
    height: 36,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frameIcon: {
    top: 227,
    left: 204,
    width: 90,
    height: 89,
    position: "absolute",
    overflow: "hidden",
  },
  learningScreenChild28: {
    top: 433,
    left: 129,
    width: 114,
    height: 52,
    backgroundColor: Color.colorHotpink,
  },
  check: {
    marginTop: 2,
    marginLeft: -55.5,
    top: "50%",
    left: "50%",
  },
  lesson1: {
    left: 4,
    fontFamily: FontFamily.inknutAntiquaRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    top: 118,
    position: "absolute",
  },
  text1: {
    top: 38,
  },
  edulingo: {
    top: 5,
    left: 137,
  },
  textParent: {
    top: 0,
    width: 393,
    backgroundColor: Color.colorPlum,
    left: 0,
    overflow: "hidden",
  },
  chapter1: {
    top: 10,
  },
  textGroup: {
    top: 56,
    height: 62,
    position: "absolute",
  },
  learningScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Learning;
