export interface ShrtcodeResult {
    code: string;
    short_link: string;
    full_short_link: string;
    short_link2: string;
    full_short_link2: string;
    share_link: string;
    full_share_link: string;
    original_link: string;
}

export interface ShrtcodeAPIResponse {
    ok: boolean;
    result: ShrtcodeResult;
}

export interface ShrtcodeAPIError {
    disallowed_reason: string;
    error: string;
    error_code: number;
    ok: boolean;
}

export interface FetchResponse {
    status: number;
    statusText: string;
    data?: ShrtcodeAPIResponse;
    error: ShrtcodeAPIError;
    loading: boolean;
    shortenURL: (url: string) => void;
}