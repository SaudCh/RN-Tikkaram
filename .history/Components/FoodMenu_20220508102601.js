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