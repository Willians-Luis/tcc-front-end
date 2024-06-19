import theme from "@/style/theme";
import { Box, Text } from "@gluestack-ui/themed";
import { Circle, useFont } from "@shopify/react-native-skia";
import { TextInput } from "react-native";
import Animated, { useAnimatedProps } from "react-native-reanimated";
import { CartesianChart, Line, useChartPressState } from "victory-native";

// const DATA = [
//     { x: 1, y: 500 },
//     { x: 2, y: 600 },
//     { x: 3, y: 550 },
//     { x: 4, y: 400 },
//     { x: 5, y: 650 },
//     { x: 6, y: 450 },
//     { x: 7, y: 400 },
//     { x: 8, y: 425 }
// ]

Animated.addWhitelistedNativeProps({ text: true })
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

function ToolTip({ x, y }) {
    return <Circle cx={x} cy={y} r={8} color="black" />
}

export default function GraphicLine({DATA}) {
    const { state, isActive } = useChartPressState({ x: 0, y: { y: 0 } })
    const font = useFont(require("../../../assets/fonts/Roboto-Regular.ttf"))

    const animatedText = useAnimatedProps(() => {
        return {
            text: `R$ ${state.y.y.value.value.toFixed(2)}`,
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
                        R${DATA[DATA.length - 1].y.toFixed(2)}
                    </Text>
                    <Text>
                        Hoje
                    </Text>
                </Box>
            )}
            <CartesianChart
                data={DATA} xKey="x" yKeys={["y"]}
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
                        <Line points={points.y} color="blue" strokeWidth={3} />
                        {isActive && (
                            <ToolTip x={state.x.position} y={state.y.y.position} />
                        )}
                    </>
                )}
            </CartesianChart>
        </Box>
    )
}