import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Form, Button, Col } from 'react-bootstrap';
import config from '../../../../../../../config';
import {
    SettingContext,
    SdkSettings,
    AppSettings
} from '../../../../../../../App';
const PlayConfig: React.FC = () => {
    const { currentSettings: currSettings, setSettings, QA } = useContext(
        SettingContext
    ) as AppSettings;
    const [newSettings, setNewSettings] = React.useState<SdkSettings>({
        ...currSettings
    });

    const handleEnvId = (e) =>
        setNewSettings({ ...newSettings, envId: e.target.value });

    const handleNodeEnv = (e) =>
        setNewSettings({
            ...newSettings,
            sdkConfig: {
                ...newSettings.sdkConfig,
                nodeEnv: e.target.value
            }
        });
    return (
        <>
            <Form>
                <Form.Group
                    controlId="initForm.Control1.1"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '16px'
                    }}
                >
                    <div>envId: </div>
                    <Form.Control as="select" onChange={handleEnvId}>
                        {config.sandbox.envId.map((id) => (
                            <option key={id}>{id}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group
                    controlId="initForm.Control1.11"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '16px'
                    }}
                >
                    <div>nodeEnv: </div>
                    <Form.Control as="select" onChange={handleNodeEnv}>
                        {config.sandbox.nodeEnv.map((id) => (
                            <option key={id}>{id}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="initForm.Control1.2">
                    <Form.Check
                        type="checkbox"
                        checked={newSettings.sdkConfig.fetchNow}
                        onChange={(e) =>
                            setNewSettings({
                                ...newSettings,
                                sdkConfig: {
                                    ...newSettings.sdkConfig,
                                    fetchNow: e.currentTarget.checked
                                }
                            })
                        }
                        label={`fetchNow=${newSettings.sdkConfig.fetchNow}`}
                    />
                </Form.Group>
                <Form.Group controlId="initForm.Control1.3">
                    <Form.Check
                        type="checkbox"
                        checked={newSettings.sdkConfig.enableConsoleLogs}
                        onChange={(e) =>
                            setNewSettings({
                                ...newSettings,
                                sdkConfig: {
                                    ...newSettings.sdkConfig,
                                    enableConsoleLogs: e.currentTarget.checked
                                }
                            })
                        }
                        label={`enableConsoleLogs=${newSettings.sdkConfig.enableConsoleLogs}`}
                    />
                </Form.Group>
                <Form.Group controlId="initForm.Control1.4">
                    <Form.Check
                        type="checkbox"
                        checked={newSettings.sdkConfig.enableErrorLayout}
                        onChange={(e) =>
                            setNewSettings({
                                ...newSettings,
                                sdkConfig: {
                                    ...newSettings.sdkConfig,
                                    enableErrorLayout: e.currentTarget.checked
                                }
                            })
                        }
                        label={`enableErrorLayout=${newSettings.sdkConfig.enableErrorLayout}`}
                    />
                </Form.Group>
            </Form>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <Button
                    variant="secondary"
                    onClick={() => setSettings({ ...newSettings })}
                >
                    Apply change
                </Button>
            </div>
        </>
    );
};

export default PlayConfig;
