import Footer from "@/components/Footer";
import { Box, Center } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { TextInput } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";

// const DATA = [
//     {day: new Date("2024-04-10").getTime(), price: 500},
//     {day: new Date("2024-04-11").getTime(), price: 600},
//     {day: new Date("2024-04-12").getTime(), price: 550},
//     {day: new Date("2024-04-13").getTime(), price: 400},
//     {day: new Date("2024-04-14").getTime(), price: 650},
//     {day: new Date("2024-04-15").getTime(), price: 450},
//     {day: new Date("2024-04-16").getTime(), price: 400},
//     {day: new Date("2024-04-17").getTime(), price: 425}
// ]

const DATA = [
    { day: 1, price: 500 },
    { day: 2, price: 600 },
    { day: 3, price: 550 },
    { day: 4, price: 400 },
    { day: 5, price: 650 },
    { day: 6, price: 450 },
    { day: 7, price: 400 },
    { day: 8, price: 425 }
]

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

export default function Results() {
    const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } })

    const animatedText = useAnimatedProps(() => {
        return {
            text: `R$ ${state.y.price.value.value.toFixed(2)}`,
            defaultValue: ""
        }
    })

    const animatedDateText = useAnimatedProps(() => {
        const date = new Date(state.x.value.value);
        return {
            text: `R$ ${date.toLocaleDateString("pt-BR")}`,
            defaultValue: ""
        }
    })

    return (

        <Center flex={1} backgroundColor="red">
            <Box padding={20} width={400} height={300} >
                {isActive && (
                    <Box>
                        <AnimatedTextInput
                            editable={false}
                            underlineColorAndroid={"transparent"}
                            style={{ fontSize: 30, fontWeight: 'bold', color: "#000" }}
                            animatedProps={animatedText}
                        ></AnimatedTextInput>

                        <AnimatedTextInput
                            editable={false}
                            underlineColorAndroid={"transparent"}
                            animatedProps={animatedDateText}
                        ></AnimatedTextInput>
                    </Box>
                )}
                <CartesianChart
                    data={DATA} xKey="day" yKeys={["price"]}
                    chartPressState={state}
                >
                    {({ points }) => (
                        <Line points={points.price} color="blue" strokeWidth={3} />
                    )}
                </CartesianChart>

            </Box>
            <Footer />
        </Center>
    )
}