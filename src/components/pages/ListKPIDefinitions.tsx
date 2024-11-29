import {
    View,
    Button,
    Heading,
    Flex,
} from '@aws-amplify/ui-react';

interface KPIListDefinitionsProps {
    onClose: () => void;
}

function KPIListDefinitions({ onClose }: KPIListDefinitionsProps): JSX.Element {
    return (
        <Flex
            direction="column"
            height="100%"
        >
            {/* Header */}
            <View
                padding="1rem"
                backgroundColor="var(--amplify-colors-neutral-40)"
            >
                <Heading level={2}>List KPI Definitions</Heading>
            </View>

            {/* Main Content */}
            <View
                padding="1rem"
                flex="1"
                overflow="auto"
                backgroundColor="var(--amplify-colors-neutral-20)"
            >
                {/* Add your form content here */}
            </View>

            {/* Footer with Close Button */}
            <View
                padding="1rem"
                backgroundColor="var(--amplify-colors-neutral-40)"
            >
                <Flex
                    direction="row"
                    justifyContent="flex-end"
                >
                    <Button
                        variation="primary"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </Flex>
            </View>
        </Flex>
    );
}

export default KPIListDefinitions;
