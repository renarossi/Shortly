import { useState } from 'react';

import { FetchResponse, ShrtcodeResult } from '../types';

export const UseFetch = (): FetchResponse => {
    const [status, setStatus] = useState<number>(0);
    const [statusText, setStatusText] = useState<string>('');
    const [data, setData] = useState<ShrtcodeResult>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const shortenURL = async (url: string) => {
        setLoading(true);
        try {
            const apiResponse = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);
            setData(json);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    return { status, statusText, data, error, loading, shortenURL };
};