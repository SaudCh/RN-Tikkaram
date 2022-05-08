import * as React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';

const FoodMenu = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Accordions">
            <List.Accordion
                title="the most wanted"
                expanded={expanded}
                onPress={handlePress}
            >
                <View>
                    <Text>hll</Text>
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