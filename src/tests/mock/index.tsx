import React, { Dispatch, SetStateAction } from 'react';
import { FlagshipSdkConfig } from '@flagship.io/js-sdk';
import { FsState } from '../../FlagshipContext';
// import manyModifInManyCampaigns from './apiAnswers/manyModifInManyCampaigns';
import oneModifInMoreThanOneCampaign from './apiAnswers/oneModifInMoreThanOneCampaign';
import { vId } from './env';
import { getFlaghipApi, getFlaghipApiKey } from '../helper/testHelper';

export const apiAnswers = {
    // manyModifInManyCampaigns,
    oneModifInMoreThanOneCampaign
};

export const defaultConfig: FlagshipSdkConfig = {
    // Nothing
};

export const DefaultLoadingComponent: React.SFC = () => <div>Loading Flagship React SDK</div>;

export const defaultContext: {
    hasError: boolean;
    state: FsState;
} = {
    hasError: false,
    state: {
        fsSdk: null,
        fsVisitor: null,
        log: null,
        fsModifications: null,
        status: {
            isSdkReady: false,
            isLoading: true,
            isVisitorDefined: false,
            lastRefresh: null,
            firstInitSuccess: null,
            hasError: false
        },
        private: {
            previousFetchedModifications: undefined
        }
    }
};

export const anonymousIdForTest = 'anonymousTest';

export const providerProps = {
    visitorData: {
        id: vId,
        context: { isAuth: true, isVip: false }
    },
    config: {
        fetchNow: true,
        enableConsoleLogs: true,
        enableSafeMode: true,
        enableErrorLayout: true,
        flagshipApi: getFlaghipApi(),
        nodeEnv: 'production',
        apiKey: getFlaghipApiKey()
    },
    envId: 'bn1ab7m56qolupi5sa0g'
};

export const fetchedModifications = [
    {
        id: 'bqjfstuirtfg01mctmn0',
        variation: {
            id: 'bqjfstuirtfg01mctmp0',
            modifications: { type: 'JSON', value: { discount: '10%' } },
            reference: false
        },
        variationGroupId: 'bqjfstuirtfg01mctmo0'
    },
    {
        id: 'bsq046crms2g1jsvtb20',
        variation: {
            id: 'bsq046crms2g1jsvtb40',
            modifications: {
                type: 'JSON',
                value: {
                    array: [1, 2, 3],
                    complex: {
                        carray: [
                            {
                                cobject: 0
                            }
                        ]
                    },
                    object: {
                        value: 123456
                    }
                }
            },
            reference: false
        },
        variationGroupId: 'bsq046crms2g1jsvtb30'
    }
];
