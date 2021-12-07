import React from "react";
declare type Props = {
    children: JSX.Element;
};
declare const PlayerContext: React.Context<any[]>;
declare const PlayerProvider: ({ children }: Props) => JSX.Element;
export { PlayerContext, PlayerProvider };
