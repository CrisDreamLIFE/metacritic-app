import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link href="/">
          <Pressable>
            <HomeIcon color="red" />
          </Pressable>
        </Link>
        <Text
          style={styles.textAbout}
          // className="text-white font-bold mb-8 text-2xl"
        >
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </Text>

        <Text
          style={styles.textAbout}
          // className="text-white font-bold mb-8 text-2xl"
        >
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </Text>

        <Text
          style={styles.textAbout}
          // className="text-white font-bold mb-8 text-2xl"
        >
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </Text>

        <Text
          style={styles.textAbout}
          // className="text-white font-bold mb-8 text-2xl"
        >
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  btnAbout: {
    color: "#60a5fa",
    fontSize: "2Opx" /* 20px */,
    lineheight: "28px" /* 28px */,
    marginTop: "96px",
  },
  textAbout: {
    color: "#ffffff",
    //fontWeight: "700",
    marginBottom: "32px",
    //fontSize: "24px",
    //lineHeight: "32px",
  },
});
