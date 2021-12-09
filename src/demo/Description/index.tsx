import React from "react";

import styles from "./index.module.css";

const Description = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>How to use</h2>
    <div className={styles.text}>
      <p className={styles.paragraph}>
        1. Wrap your root component with{" "}
        <pre className={styles.code}>
          {"<PlayerProvider><Root/></PlayerProvider>"}
        </pre>
      </p>
      <p className={styles.paragraph}>
        2. Import player components and react hooks that you need in your app{" "}
        <pre
          className={styles.code}
        >{`import { useMusicPlayer, useMusicPlayerUi, Duration, PlayPauseButton, SeekSlider} from 'react-musiio-player'`}</pre>
      </p>
      <p className={styles.paragraph}>
        3. Use it in your app
        <pre className={styles.code}>{`
        const { onTrackLoad } = useMusicPlayer();\n
        const { trackData } = useMusicPlayerUi();
        \n
        <div>
          <div>
            <div>{trackData.title}</div>
            <div>{trackData.artist}</div>
          </div>
          <PlayPauseButton />
          <div
            id="play-next-track-button"
            onClick={() =>
              onTrackLoad({
                id: newTrack.id,
                url: newTrack.link,
                title: newTrack.title,
                artist: newTrack.artist,
                isAutoPlay: true,
              })
            }
          />
          <div>
            <SeekSlider />
            <Duration />
          </div>
        </div>
      `}</pre>
      </p>
      <p className={styles.paragraph}>
        4. You can wrap components with any CSS classses and styles you want to
        customize your player UI
      </p>
    </div>
    <h2 className={styles.title}>Documentation</h2>
    <div className={styles.text}>
      <p className={styles.paragraph}>
        You can read documentation about every player component{" "}
        <a href="https://github.com/Musiio-AI/react-musiio-player#readme">
          here
        </a>
        .
      </p>
    </div>
  </div>
);

export default Description;
