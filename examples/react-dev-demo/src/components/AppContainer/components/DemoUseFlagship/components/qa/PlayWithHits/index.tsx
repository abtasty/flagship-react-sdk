import React from 'react';
import { useFlagship } from '@flagship.io/react-sdk';
import { Button, Form, Col, Nav } from 'react-bootstrap';
import { Formik } from 'formik';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { HitShape } from '@flagship.io/js-sdk';

const PlayWithHits: React.FC = () => {
    const defaultTransactionHitPayload = {
        type: 'Transaction',
        data: {
            transactionId: '12451342423',
            affiliation: 'testAffiliation',
            totalRevenue: 999,
            shippingCost: 888,
            shippingMethod: 'testShippingMethod',
            currency: 'testCurrency',
            taxes: 1234444,
            paymentMethod: 'testPaymentMethod',
            itemCount: 2,
            couponCode: 'TESTCOUPON',
            documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',
            pageTitle: 'TestScreen'
        }
    };
    const defaultScreenViewHitPayload = {
        type: 'ScreenView',
        data: {
            documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',
            pageTitle: 'TestScreenView',
        }
    };
    const defaultPageViewHitPayload = {
        type: 'PageView',
        data: {
            documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',
            pageTitle: 'TestPageView',
        }
    };
    const defaultEventHitPayload = {
        type: 'Event',
        data: {
            category: 'User Engagement',
            action: 'signOff',
            label: 'test label ;)',
            value: 123,
            documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',
            pageTitle: 'TestTitle'
        }
    };
    const defaultItemHitPayload = {
        type: 'Item',
        data: {
            transactionId: '12451342423',
            name: 'testItem',
            price: 999,
            code: 'testCode',
            category: 'testCategory',
            quantity: 1234444,
            documentLocation: 'http%3A%2F%2Fabtastylab.com%2F60511af14f5e48764b83d36ddb8ece5a%2F',
            pageTitle: 'TestScreen'
        }
    };
    const payloads = {
        transaction: defaultTransactionHitPayload,
        screenview: defaultScreenViewHitPayload,
        event: defaultEventHitPayload,
        item: defaultItemHitPayload,
        pageview: defaultPageViewHitPayload,
    };
    const [hasError, setError] = React.useState(false);
    const [hasError2, setError2] = React.useState(false);
    const [currentTestedHit, setHitToTest] = React.useState<string>('transaction');
    const [hitPayload, setHitPayload] = React.useState(payloads[currentTestedHit]);

    const [hitsPayload, setHitsPayload] = React.useState([
        { ...payloads.transaction },
        { ...payloads.screenview },
        { ...payloads.event },
        { ...payloads.item },
        { ...payloads.pageview },
    ]);
    const update = () => {
        setHitPayload(payloads[currentTestedHit]);
    };
    React.useEffect(update, [currentTestedHit]);
    const { hit: fsHit } = useFlagship();
    return (
        <>
            <p>Send a hit, demo: </p>
            <Nav variant="tabs" defaultActiveKey="hitTransaction">
                <Nav.Item>
                    <Nav.Link eventKey="hitTransaction" onClick={() => setHitToTest('transaction')}>
                        Transaction Hit
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="hitPageView" onClick={() => setHitToTest('pageview')}>
                        PageView Hit
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="hitScreenView" onClick={() => setHitToTest('screenview')}>
                        ScreenView Hit
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="hitEvent" onClick={() => setHitToTest('event')}>
                        Event Hit
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="hitItem" onClick={() => setHitToTest('item')}>
                        Item Hit
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    hitPayload
                }}
                validate={(values) => {
                    const errors: any = {};
                    if (!values.hitPayload) {
                        errors.hitPayload = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    setHitPayload({ ...values.hitPayload });
                    fsHit.send({ ...values.hitPayload });
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, touched, isValid, errors }) => (
                    <Form noValidate onSubmit={handleSubmit as any}>
                        <Form.Group as={Col} md="12" controlId="settingsForm">
                            <Form.Label>{currentTestedHit} hit payload</Form.Label>
                            <JSONInput
                                waitAfterKeyPress={3000}
                                id="hitPayload"
                                placeholder={values.hitPayload}
                                locale={locale}
                                height="550px"
                                width="100%"
                                onChange={({ error, jsObject }) => {
                                    if (!error) {
                                        setFieldValue('hitPayload', jsObject || {}, true);
                                        setError(false);
                                    } else {
                                        setError(true);
                                    }
                                }}
                                style={{
                                    body: {
                                        fontSize: '16px'
                                    }
                                }}
                            />
                        </Form.Group>
                        <div className="flex justify-end ph3">
                            <Button
                                disabled={hasError}
                                variant="secondary"
                                type="submit"
                                style={{
                                    cursor: hasError ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Send hit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="mv3">Have a look to logs + network on your browser inspect tools to see results.</div>
            <Formik
                initialValues={{
                    hitsPayload
                }}
                validate={(values) => {
                    const errors: any = {};
                    if (!values.hitsPayload) {
                        errors.hitsPayload = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    setHitsPayload([...values.hitsPayload]);
                    fsHit.sendMultiple([...values.hitsPayload] as HitShape[]);
                }}
            >
                {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, touched, isValid, errors }) => (
                    <Form noValidate onSubmit={handleSubmit as any}>
                        <Form.Group as={Col} md="12" controlId="settingsForm">
                            <Form.Label>sendMultiple argument</Form.Label>
                            <JSONInput
                                waitAfterKeyPress={3000}
                                id="hitsPayload"
                                placeholder={values.hitsPayload}
                                locale={locale}
                                height="550px"
                                width="100%"
                                onChange={({ error, jsObject }) => {
                                    if (!error) {
                                        setFieldValue('hitsPayload', jsObject || {}, true);
                                        setError2(false);
                                    } else {
                                        setError2(true);
                                    }
                                }}
                                style={{
                                    body: {
                                        fontSize: '16px'
                                    }
                                }}
                            />
                        </Form.Group>
                        <div className="flex justify-end ph3">
                            <Button
                                disabled={hasError2}
                                variant="secondary"
                                type="submit"
                                style={{
                                    cursor: hasError2 ? 'not-allowed' : 'pointer'
                                }}
                            >
                                Send multiple hits
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default PlayWithHits;
