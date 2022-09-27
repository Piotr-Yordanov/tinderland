import AudioPlayer from 'react-h5-audio-player';

const Footer = () => {
  return (
    <div className='sticky bottom-0'>
      <div className='layout'>
        <AudioPlayer
          autoPlay
          layout='horizontal'
          showJumpControls={false}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          showDownloadProgress={false}
          src='/music/Speed-of-sound.opus'
          // other props here
        />
      </div>
    </div>
  );
};

export default Footer;
