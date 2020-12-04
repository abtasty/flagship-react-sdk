import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';
import { SettingContext, AppSettings } from '../../../../../../../App';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { NotificationManager } from 'react-notifications';

const PlayVisitorData: React.FC = () => {
    const { currentSettings, setSettings } = useContext(SettingContext) as AppSettings;
    const [hasError, setError] = React.useState(false);
    const [visitorIdMode, setVisIdMode] = React.useState<'manual' | 'autogen'>('manual');

    const handleVisMode = (e) => {
        setVisIdMode(e.currentTarget.value);
    };

    const handleJsonInputChange = ({ error, jsObject }, setFieldValue) => {
        if (!error) {
            setFieldValue('vContext', jsObject || {}, true);
            setError(false);
        } else {
            setError(true);
        }
    };

    return (
        <Formik
            initialValues={{
                vId: currentSettings.visitorData.id,
                vContext: currentSettings.visitorData.context,
                isAuthenticated: currentSettings.visitorData.isAuthenticated
            }}
            validate={(values) => {
                const errors: any = {};
                if (!values.vId) {
                    errors.vId = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                setSettings({
                    ...currentSettings,
                    visitorData: {
                        ...currentSettings.visitorData,
                        isAuthenticated: values.isAuthenticated,
                        id: visitorIdMode === 'autogen' ? undefined : values.vId,
                        context: values.vContext || {}
                    }
                });
                NotificationManager.info('Settings updated');
            }}
        >
            {({ handleSubmit, handleChange, handleBlur, setFieldValue, values, touched, isValid, errors }) => (
                <Form noValidate onSubmit={handleSubmit as any}>
                    <Form.Group as={Col} md="12" controlId="validationFormik01">
                        <Form.Label>Visitor ID</Form.Label>

                        <div className="flex content-center">
                            <Form.Check
                                style={{ minWidth: 180, marginBottom: 'auto', marginTop: 'auto' }}
                                type="radio"
                                value="manual"
                                checked={visitorIdMode === 'manual'}
                                label={`specific value`}
                                onChange={handleVisMode}
                            />
                            <Form.Control
                                type="text"
                                disabled={visitorIdMode !== 'manual'}
                                name="vId"
                                value={values.vId}
                                onChange={handleChange}
                                isValid={touched.vId && !errors.vId}
                                isInvalid={!!errors.vId}
                            />
                        </div>

                        <Form.Check
                            type="radio"
                            value="autogen"
                            checked={visitorIdMode === 'autogen'}
                            label={`auto-generated`}
                            onChange={handleVisMode}
                        />
                        <Form.Control.Feedback type="invalid">{errors.vId}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationFormik02">
                        <Form.Label>Visitor Context</Form.Label>
                        <JSONInput
                            waitAfterKeyPress={3000}
                            id="a_unique_id"
                            placeholder={values.vContext}
                            locale={locale}
                            height="550px"
                            width="100%"
                            onChange={(data) => handleJsonInputChange(data, setFieldValue)}
                            onBlur={(data) => handleJsonInputChange(data, setFieldValue)}
                            style={{
                                body: {
                                    fontSize: '16px'
                                }
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="initForm.ControlSelect4">
                        <Form.Label>visitor anonymous ?</Form.Label>
                        <Form.Check
                            type="checkbox"
                            id={`default-isAuthenticated`}
                            checked={values.isAuthenticated}
                            onChange={() => setFieldValue('isAuthenticated', !values.isAuthenticated)}
                            label={'isAuthenticated=' + values.isAuthenticated}
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
                            Apply change
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PlayVisitorData;
