declare type PlayTrackArgTypes = {
    dispatch: ({}: {}) => any;
    id: number;
    url: string;
    title: string;
    artist: string;
    isAutoPlay: boolean;
};
declare type PlayPauseTrackArgTypes = {
    dispatch: ({}: {}) => any;
};
export declare function dispatchTrackData({ dispatch, id, url, title, artist, isAutoPlay, }: PlayTrackArgTypes): void;
export declare function dispatchPauseTrack({ dispatch }: PlayPauseTrackArgTypes): void;
export declare function dispatchPlayTrack({ dispatch }: PlayPauseTrackArgTypes): void;
export {};
