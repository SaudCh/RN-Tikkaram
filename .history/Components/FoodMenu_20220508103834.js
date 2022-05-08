import { HStack } from 'native-base';
import * as React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { ColorTick, Pixxa } from './Images';

const FoodMenu = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section>
            <List.Accordion
                title="the most wanted"
                expanded={expanded}
                onPress={handlePress}
            >
                <View style={{ margin: 10, backgroundColor: "#fff", padding: 10, borderRadius: 10 }}>
                    <HStack alignItems="center">
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "70%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Food Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>the ingredients</Text>
                            <Text style={{ fontSize: 14, color: "#00A27F", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>2.30 JD</Text>
                        </View>
                        <View style={{ alignSelf: "flex-start" }}>
                            <ColorTick />
                        </View>
                    </HStack>
                    <HStack alignItems="center">
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "70%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Food Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>the ingredients</Text>
                            <Text style={{ fontSize: 14, color: "#00A27F", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>2.30 JD</Text>
                        </View>
                        <View style={{ alignSelf: "flex-start" }}>
                            <ColorTick />
                        </View>
                    </HStack>
                    <HStack alignItems="center">
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "70%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Food Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>the ingredients</Text>
                            <Text style={{ fontSize: 14, color: "#00A27F", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>2.30 JD</Text>
                        </View>
                        <View style={{ alignSelf: "flex-start" }}>
                            <ColorTick />
                        </View>
                    </HStack>
                </View>
            </List.Accordion>

            <List.Accordion title="Sandwiches">
            </List.Accordion>

            <List.Accordion title="Meals">
            </List.Accordion>
        </List.Section>
    );
};

export default FoodMenu;