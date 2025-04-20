declare module 'react-native-voice' {
    interface Voice {
      onSpeechStart: () => void;
      start(language: string): Promise<void>;
      stop(): Promise<void>;
      destroy(): Promise<void>;
      onSpeechResults: (event: any) => void;
      onSpeechError: (event: any) => void;
      removeAllListeners: () => void;
    }
  
    const Voice: Voice;
    export default Voice;
  }
  