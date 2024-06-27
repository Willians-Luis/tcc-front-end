import theme from "@/style/theme";
import { Image } from "@gluestack-ui/themed";
import { Card } from "@gluestack-ui/themed";

export default function Banner() {
    return (
        <Card backgroundColor={theme.colorDark} alignItems="center">
            <Image
                width={300}
                height={100}
                source={require("../../../assets/images/logopng.png")}
                alt="Logo da empresa"
            />
        </Card>
    )
}