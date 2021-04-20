import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: "I wanna say that I am so happy",
      amount: 499.99,
      timestamp: new Date(),
    },
    {
      description: "I wanna say that I am so happy",
      amount: 799.99,
      timestamp: new Date(),
    },
  ]);

  const addGig = () => {
    setGigs([...gigs, { description, amount, timestamp: new Date() }]);

    setDescription("");
    setAmount("");
  };

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs]);

  return (
    <>
      <View>
        <Text style={styles.titleText}>
          {/* {"\n"} */}
          Let's Build React native app for Freelance Devs to Track Income 🚀🚀🚀
        </Text>
        <View>
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "San"],
              datasets: [
                {
                  data: [gigs[0].amount, gigs[1].amount],
                },
              ],
            }}
            width={500}
            height={220}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
      </View>
      <Text>Total: {total}</Text>
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Enter a description"
        onChangeText={(text) => {
          setDescription(text);
        }}
      />
      <TextInput
        style={styles.input}
        value={amount}
        keyboardType="numeric"
        placeholder="Enter the amount you made"
        onChangeText={(text) => setAmount(text)}
      />
      <Button
        disabled={!amount && !description}
        onPress={addGig}
        title="Add Gig 🚀"
        color="green"
      />
    </>
  );
}

const styles = StyleSheet.create({
  titleText: {
    // backgroundColor: "red",
    // padding: "20px",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    padding: "20px",
    width: "75%",
    margin: "20px",
    borderWidth: 2,
    borderColor: "red",
  },
});
