import {
    View,
    Heading,
    Button,
    Grid,
    Flex
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { format } from 'date-fns';
import { useState } from 'react';
import KPICreateDefinitions from './CreateKPIDefinitions';
import KPIUpdateDefinitions from './UpdateKPIDefinitions';
import KPIListDefinitions from './ListKPIDefinitions';
import KPIListValues from './ListKPIValues';
import KPIUpdateValues from './UpdateKPIValues';
import KPICreateValues from './CreateKPIValues';

// Create an enum or type for the active page
type ActivePage = 'none' | 'cKPIDef' | 'uKPIDef' | 'lKPIDef' | 'cKPIVal' | 'uKPIVal' | 'lKPIVal';

function LandingPage(): JSX.Element {
    const [activePage, setActivePage] = useState<ActivePage>('none');
    const currentDate = format(new Date(), 'MMMM dd, yyyy');

    // Helper function to render the active page
    const renderActivePage = () => {
        switch (activePage) {
            case 'cKPIDef':
                return <KPICreateDefinitions onClose={() => setActivePage('none')} />;
            case 'uKPIDef':
                return <KPIUpdateDefinitions onClose={() => setActivePage('none')} />;
            case 'lKPIDef':
                return <KPIListDefinitions onClose={() => setActivePage('none')} />;
            case 'cKPIVal':
                return <KPICreateValues onClose={() => setActivePage('none')} />;
            case 'uKPIVal':
                return <KPIUpdateValues onClose={() => setActivePage('none')} />;
            case 'lKPIVal':
                return <KPIListValues onClose={() => setActivePage('none')} />;
            default:
                return <Heading level={1}>Welcome to KPI Management</Heading>;
        }
    };

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
                <Grid
                    templateColumns="1fr auto 1fr"
                    alignItems="center"
                    width="100%"
                >
                    <View></View> {/* Empty column for spacing */}
                    <Heading
                        level={1}
                        style={{
                            color: 'white'
                        }}>
                        KPI Management Application
                    </Heading>
                    <Flex justifyContent="flex-end">
                        <Heading
                            level={2}
                            style={{
                                whiteSpace: 'nowrap',
                                fontSize: 'inherit',
                                color: 'white'
                            }}
                        >
                            {currentDate}
                        </Heading>
                    </Flex>
                </Grid>
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
                            onClick={() => setActivePage('cKPIDef')}
                        >
                            Create KPI Definition
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => setActivePage('uKPIDef')}
                        >
                            Update KPI Definition
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => setActivePage('lKPIDef')}
                        >
                            List KPI Definitions
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => setActivePage('cKPIVal')}
                        >
                            Add KPI Values
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => setActivePage('uKPIVal')}
                        >
                            Update KPI Values
                        </Button>

                        <Button
                            variation="primary"
                            size="small"
                            onClick={() => setActivePage('lKPIVal')}
                        >
                            List KPI Values
                        </Button>

                    </Flex>
                </View>

                {/* Main Content */}
                <View
                    padding="1rem"
                    height="100%"
                    overflow="auto"
                >
                    {renderActivePage()}
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
                <p>{currentDate} © KPI Management Application. All rights reserved.</p>

            </View>
        </Grid>
    );
}

export default LandingPage;
