import './App.css';

import { FlagshipProvider } from '@flagship.io/react-sdk';
import React, { useEffect, useState, createContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { AppContainer } from './components/AppContainer';
import config from './config';
import Header from './components/Header';
export const SettingContext = createContext({
  envId: config.envId,
  sdkConfig: { ...config.sdkConfig },
  visitorData: { ...config.visitorData },
});
const App: React.FC = () => {
  const [currentSettings, setSettings] = React.useState({
    envId: config.envId,
    sdkConfig: { ...config.sdkConfig },
    visitorData: { ...config.visitorData },
  });
  return (
    <>
      <SettingContext.Provider value={currentSettings}>
        <FlagshipProvider
          envId={currentSettings.envId}
          config={currentSettings.sdkConfig}
          visitorData={currentSettings.visitorData}
          onInitStart={() => {
            console.log('init start');
          }}
          onInitDone={() => {
            console.log('init done');
          }}
          loadingComponent={
            <Container className="mt3">
              <Row>
                <Col
                  xs={12}
                  style={{ color: 'white', height: '100vh', fontSize: '5vw' }}
                >
                  Loading Flagship React SDK...
                </Col>
              </Row>
            </Container>
          }
        >
          <Header />
          <AppContainer
            onSubmitNewSettings={(newSettings) =>
              setSettings({ ...currentSettings, ...newSettings })
            }
          />
        </FlagshipProvider>
      </SettingContext.Provider>
    </>
  );
};

export default App;