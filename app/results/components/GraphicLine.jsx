import theme from "@/style/theme";
import { Box, Center, Text } from "@gluestack-ui/themed";
import { Circle, useFont } from "@shopify/react-native-skia";
import { TextInput } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";

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

function ToolTip({ x, y }) {
    return <Circle cx={x} cy={y} r={8} color="black" />
}

export default function GraphicLine() {
    const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } })
    const font = useFont(require("../../../fonts/Roboto-Regular.ttf"))

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
        <Box width={"100%"} height={300} >
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

            {!isActive && (
                <Box>
                    <Text fontSize={30} fontWeight="bold">
                        R${DATA[DATA.length - 1].price.toFixed(2)}
                    </Text>
                    <Text>
                        Hoje
                    </Text>
                </Box>
            )}
            <CartesianChart
                data={DATA} xKey="day" yKeys={["price"]}
                chartPressState={state}
                axisOptions={{
                    tickCount: 5,
                    font: font,
                    labelOffset: { x: 3, y: 2 },
                    labelPosition: "outset",
                    formatYLabel: (value) => `R$${value.toFixed(2)}`,
                    formatXLabel: (value) => `${value}`
                }}
            >
                {({ points }) => (
                    <>
                        <Line points={points.price} color="blue" strokeWidth={3} />
                        {isActive && (
                            <ToolTip x={state.x.position} y={state.y.price.position} />
                        )}
                    </>
                )}
            </CartesianChart>
        </Box>
    )
}