"use client";
import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  section: {
    margin: 2,
    padding: 1,
  },
  table: {
    display: "table" as any,
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "column-reverse",
  },
  tableCol: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

const ResultPDF = ({ results }: { results: any }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 20 }}>
        Examination Results
      </Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Roll</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Reg No</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Fathers Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Mothers Name</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Date of Birth</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Gender</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Examination</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Year</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Board</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Result</Text>
          </View>
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>Grade</Text>
          </View>
        </View>
        {results.map((result: any) => (
          <View style={styles.tableRow} key={result.roll}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.roll}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.regNo}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.name}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.fatherName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.motherName}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.dateOfBirth}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.gender}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.examination}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.year}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.board}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.result}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{result.grade}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResultPDF;
