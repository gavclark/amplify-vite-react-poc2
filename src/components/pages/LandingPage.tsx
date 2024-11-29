import {
    View,
    Heading,
    Button,
    Grid,
    Flex
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { format } from 'date-fns';

function LandingPage(): JSX.Element {
    const currentDate = format(new Date(), 'MMMM dd, yyyy');

    return (
        <Grid
            templateColumns="1fr"
            templateRows="auto 1fr auto"
            height="100vh"
            width="100vw"
            maxWidth="100%"
            maxHeight="100%"
            overflow="hidden"
        >
            {/* Header */}
            <View
                backgroundColor="var(--amplify-colors-blue-60)"
                padding="1rem"
                color="white"
                width="100%"
            >
                <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                >
                    <Heading level={1}>KPI Management Application</Heading>
                    <Heading
                        level={3}
                        style={{
                            marginLeft: '2rem',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {currentDate}
                    </Heading>
                </Flex>
            </View>

            {/* Main Content Area with Sidebar */}
            <Grid
                templateColumns={{ base: "1fr", large: "250px 1fr" }}
                flex="1"
                width="100%"
                height="100%"
            >
                {/* Aside/Sidebar */}
                <View
                    backgroundColor="var(--amplify-colors-neutral-20)"
                    padding="1rem"
                    height="100%"
                >
                    <Flex
                        direction="column"
                        gap="1rem"
                        height="100%"
                    >
                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => console.log('Home')}
                        >
                            Home
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => console.log('Create KPI Definition')}
                        >
                            Create KPI Definition
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => console.log('Update KPI Definition')}
                        >
                            Update KPI Definition
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => console.log('Add KPI Values')}
                        >
                            Add KPI Values
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => console.log('Update KPI Values')}
                        >
                            Update KPI Values
                        </Button>
                    </Flex>
                </View>

                {/* Main Content */}
                <View
                    padding="1rem"
                    height="100%"
                    overflow="auto"
                >
                    <Heading level={2}>Welcome to KPI Management</Heading>
                    {/* Add your main content here */}
                </View>
            </Grid>

            {/* Footer */}
            <View
                backgroundColor="var(--amplify-colors-blue-60)"
                padding="1rem"
                color="white"
                textAlign="center"
                width="100%"
            >
                <p>© 2024 KPI Management Application. All rights reserved.</p>
            </View>
        </Grid>
    );
}

export default LandingPage;
