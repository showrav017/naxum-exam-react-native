import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "~components/Text";

export const Container = styled(SafeAreaView).attrs({
    edges: ["left", "right", "top", "bottom"],
})`
  flex: 1;
  padding: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction:row;
`;

const getTopCardProps = (props) => ({
    imageStyle: {
        opacity: 0.2,
        backgroundColor: props.theme.colors.background,
        transform: [{ scale: 1.05 }],
    },
});

export const Title = styled(Text).attrs({
    fontSize: "h3",
    fontWeight: "bold",
})`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 5px;
`;

export const Highlight = styled(Title)`
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled(Text)`
  color: ${(props) => props.theme.colors.text}; ;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#bcbcbc",
})`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
  font-size: ${(props) => props.theme.typography.sizes.regular.size}px;
  line-height: ${(props) => props.theme.typography.sizes.regular.lineHeight}px;
`;