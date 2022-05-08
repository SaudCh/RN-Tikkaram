import * as React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-paper';

const FoodMenu = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Accordions">
            <List.Accordion
                title="the most wanted">
                <View>
                    <Text>hll</Text>
                </View>
            </List.Accordion>

            <List.Accordion
                title="Sandwiches"
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </List.Section>
    );
};

export default FoodMenu;