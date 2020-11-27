import { API } from '../mock/env';

export const getFlaghipApi = (): string => {
    if (process.env?.DECISION_API === 'staging') {
        return API.v2_staging;
    }
    // return API.v1_prod
    return API.v2_prod;
};

export const getFlaghipApiKey = (): string => {
    if (process.env?.DECISION_API === 'staging') {
        return '***'; // staging => ask team leader
    }
    return 'M2FYdfXsJ12tjJQuadw7y9DZojqNGBvecpjGXY93'; // prod
};

export const extractLogsThatReportedMessage = (message: string, spyConsoleLogs: any): any[] => {
    return spyConsoleLogs.mock.calls.filter((call: any) =>
        (call[0] as string).toLowerCase().includes(message.toLowerCase())
    );
};

export const hasFlagshipSdkFatalError = (spyErrorLogs: any): boolean =>
    extractLogsThatReportedMessage('- FATAL -', spyErrorLogs).length > 0;
