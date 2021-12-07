declare type TrackPlayArgs = {
    id: number;
    url: string;
    title: string;
    artist: string;
    isAutoPlay: boolean;
};
export declare const useMusicPlayerDuration: () => number;
export declare const useMusicPlayerCurrentTime: () => number;
export declare const useMusicPlayerUi: () => {
    trackData: any;
    isPlaying: any;
    player: any;
};
export declare const useMusicPlayer: () => {
    seekTo: (time: Number) => void;
    onTrackLoad: ({ id, url, title, artist, isAutoPlay }: TrackPlayArgs) => void;
    onTrackPlay: () => void;
    onTrackPause: () => void;
};
export {};
