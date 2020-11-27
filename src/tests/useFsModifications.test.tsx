import { renderHook } from '@testing-library/react-hooks';
import React from 'react';

import { waitFor } from '@testing-library/react';
import { FlagshipProvider } from '../FlagshipContext';
import { useFsModifications } from '../FlagshipHooks';
import { providerProps } from './mock';
import { hasFlagshipSdkFatalError } from './helper/testHelper';

const defaultParams = [
    {
        key: 'discount',
        defaultValue: '0%',
        activate: false
    }
];

describe('useFsModifications hook', () => {
    let isReady: boolean;
    let spyWarnLogs: any;
    let spyErrorLogs: any;
    let spyInfoLogs: any;
    let resultAfterApiCall;
    const wrapper = ({ children }: { children: React.ReactNode }): any => (
        <FlagshipProvider
            envId={providerProps.envId}
            {...providerProps.config}
            visitorData={providerProps.visitorData}
            onInitDone={() => {
                isReady = true;
            }}
        >
            {children}
        </FlagshipProvider>
    );
    let hookOutput;
    beforeAll(() => {
        //
    });
    beforeEach(() => {
        isReady = false;
        spyWarnLogs = jest.spyOn(console, 'warn').mockImplementation();
        spyErrorLogs = jest.spyOn(console, 'error').mockImplementation();
        spyInfoLogs = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        spyWarnLogs.mockRestore();
        spyErrorLogs.mockRestore();
        spyInfoLogs.mockRestore();
    });
    test('it should give default value when SDK not ready and update when it is', async () => {
        const { result } = renderHook(() => useFsModifications(defaultParams), {
            wrapper
        });

        const resultBeforeApiCall = result.current;

        await waitFor(() => {
            if (!isReady) {
                throw new Error('not ready');
            }
        });
        expect(hasFlagshipSdkFatalError(spyErrorLogs)).toEqual(false);
        resultAfterApiCall = result.current;

        expect(resultBeforeApiCall).toEqual({
            discount: '0%'
        });
        expect(resultAfterApiCall).toEqual({
            discount: '10%'
        });
        expect(isReady).toEqual(true);
    });
});
