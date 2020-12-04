import React, { useContext, useEffect } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { NotificationManager } from 'react-notifications';

import { AppSettings, SdkSettings, SettingContext } from '../../../../../../../App';
import config from '../../../../../../../config';

const PlayVisitorData: React.FC = () => {
    const { currentSettings: currSettings, setSettings } = useContext(SettingContext) as AppSettings;

    const [newSettings, setNewSettings] = React.useState<SdkSettings>({
        ...currSettings
    });

    const [visitorIdMode, setVisIdMode] = React.useState<'manual' | 'autogen'>('manual');

    useEffect(() => {
        setNewSettings((s) => ({ ...currSettings, ...newSettings.visitorData }));
    }, [currSettings]);

    const handleVisitorId = (e) =>
        setNewSettings({
            ...newSettings,
            visitorData: {
                ...newSettings.visitorData,
                id: e?.target?.value
            }
        });

    const handleAnonymous = (e) =>
        setNewSettings({
            ...newSettings,
            visitorData: {
                ...newSettings.visitorData,
                isAuthenticated: e.currentTarget.checked
            }
        });
    const handleVisMode = (e) => {
        setVisIdMode(e.currentTarget.value);
    };
    const handleVisitorContext = (e) => {
        const node = JSON.parse(e.currentTarget.parentElement.innerText);
        const temp = { ...newSettings };
        if (e.currentTarget.checked) {
            setNewSettings({
                ...newSettings,
                visitorData: {
                    ...newSettings.visitorData,
                    context: {
                        ...newSettings.visitorData.context,
                        [Object.keys(node)[0]]: true
                    }
                }
            });
        } else {
            const keyToRemove = Object.keys(node)[0];
            setNewSettings({
                ...newSettings,
                visitorData: {
                    ...newSettings.visitorData,
                    context: Object.entries(temp.visitorData.context).reduce((reducer, [key, value]) => {
                        if (key === keyToRemove) {
                            if (Object.keys(config.visitorData.context).includes(keyToRemove)) {
                                return { ...reducer, [key]: false };
                            }
                            return reducer;
                        }
                        return { ...reducer, [key]: value };
                    }, {})
                }
            });
        }
    };
    return (
        <>
            <Form>
                <Form.Group
                    controlId="initForm.ControlSelect2"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '16px'
                    }}
                >
                    <div>visitor id: </div>
                    <div className="mb-3">
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
                                className="fsTextField"
                                disabled={visitorIdMode !== 'manual'}
                                onChange={handleVisitorId}
                                value={newSettings.visitorData.id || ''}
                                placeholder={newSettings.visitorData.id || 'this field is required !'}
                            ></Form.Control>
                        </div>

                        <Form.Check
                            type="radio"
                            value="autogen"
                            checked={visitorIdMode === 'autogen'}
                            label={`auto-generated`}
                            onChange={handleVisMode}
                        />
                    </div>
                </Form.Group>
                {visitorIdMode === 'autogen' && newSettings.enableClientCache && (
                    <Alert variant="info" className="fs-alert">
                        <b>NOTE:</b> The SDK setting "enableClientCache" is enabled. From there, it might happen that
                        your visitor id will be the one which is currently saved in the local storage (by the SDK)
                        instead.
                    </Alert>
                )}
                <div className="fsAnchor" id="playWithVisitorContext" />
                <Form.Group controlId="initForm.ControlSelect3">
                    <Form.Label>visitor context</Form.Label>
                    {Object.entries({
                        ...config.visitorData.context,
                        ...newSettings.visitorData.context
                    }).map(([key, value]) => (
                        <Form.Check
                            key={key}
                            type="checkbox"
                            id={`default-${key}`}
                            checked={newSettings.visitorData.context.hasOwnProperty(key) ? !!value : false}
                            onChange={handleVisitorContext}
                            label={JSON.stringify({ [key]: value })}
                        />
                    ))}
                </Form.Group>
                <Form.Group controlId="initForm.ControlSelect4">
                    <Form.Label>visitor anonymous ?</Form.Label>
                    <Form.Check
                        type="checkbox"
                        id={`default-isAuthenticated`}
                        checked={newSettings.visitorData.isAuthenticated || false}
                        onChange={handleAnonymous}
                        label={'isAuthenticated=' + newSettings.visitorData.isAuthenticated}
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
                    onClick={() => {
                        setSettings({
                            ...newSettings,
                            visitorData: {
                                ...newSettings.visitorData,
                                id: visitorIdMode === 'autogen' ? undefined : newSettings.visitorData.id
                            }
                        });
                        NotificationManager.info('Settings updated');
                    }}
                >
                    Apply change
                </Button>
            </div>
        </>
    );
};

export default PlayVisitorData;
