import {
    CartesianChart,
    useBarGroupPaths,
  } from "victory-native";
  import { Path } from "@shopify/react-native-skia";

  function MyCustomBarGroup({
    points,
    chartBounds,
    innerPadding,
  }) {
    // 👇 use the hook to generate path objects.
    const { paths } = useBarGroupPaths(points, chartBounds);
  
    return paths.map((path) => <Path path={path} style="fill" color="red" />);
  }

export default function GraphicBar() {
    const DATA = [
        { x: 1, y: 500, z: 500 },
        { x: 2, y: 600, z: 500 },
        { x: 3, y: 550, z: 500 },
        { x: 4, y: 400, z: 500 },
        { x: 5, y: 650, z: 500 },
        { x: 6, y: 450, z: 500 },
        { x: 7, y: 400, z: 500 },
        { x: 8, y: 425, z: 500 }
    ]

    return (
        <CartesianChart data={DATA} xKey="x" yKeys={["y", "z"]}>
          {({ points }) => <MyCustomBarGroup points={[points.y, points.z]} />}
        </CartesianChart>
      );
}