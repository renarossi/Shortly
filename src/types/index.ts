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

export interface FetchResponse {
    status: number;
    statusText: string;
    data?: ShrtcodeAPIResponse;
    error: any;
    loading: boolean;
    shortenURL: (url: string) => void;
}