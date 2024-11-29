import {
    View,
    Button,
    Heading,
    Flex,
} from '@aws-amplify/ui-react';

interface KPICreateDefinitionsProps {
    onClose: () => void;
}

function KPICreateDefinitions({ onClose }: KPICreateDefinitionsProps): JSX.Element {
    return (
        <Flex
            direction="column"
            height="100%"
        >
            {/* Header */}
            <View
                padding="1rem"
                backgroundColor="var(--amplify-colors-neutral-20)"
            >
                <Heading level={2}>Create KPI Definition</Heading>
            </View>

            {/* Main Content */}
            <View
                padding="1rem"
                flex="1"
                overflow="auto"
            >
                {/* Add your form content here */}
            </View>

            {/* Footer with Close Button */}
            <View
                padding="1rem"
                backgroundColor="var(--amplify-colors-neutral-20)"
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

export default KPICreateDefinitions;
