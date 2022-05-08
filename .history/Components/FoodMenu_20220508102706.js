import * as React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { Pixxa } from './Images';

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
                <View>
                    <View>
                        <Pixxa />
                        <View style={{ marginLeft: 10, width: "60%" }}>
                            <Text style={{ fontSize: 16, color: "#374151", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>Restaurants Name</Text>
                            <Text style={{ fontSize: 14, color: "#898989", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>5.3km</Text>
                            <Text style={{ fontSize: 16, color: "#A6A6A6", fontFamily: "arabicRegular", margin: 0, padding: 0 }}>+962 79 999 9999</Text>
                        </View>
                    </View>
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