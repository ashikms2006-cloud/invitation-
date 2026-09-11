// Luxury Web Audio API synthesizer for sacred ambient choral tones & celebratory sparkles
class SacredAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = true;

    // Sacred chord progression (F major, C major, D minor, Bb major with ethereal harmonics)
    const chords = [
      [174.61, 220.00, 261.63, 349.23, 523.25], // F major 9
      [130.81, 196.00, 261.63, 329.63, 493.88], // C major 7
      [146.83, 220.00, 293.66, 349.23, 440.00], // D minor 7
      [116.54, 174.61, 233.08, 293.66, 349.23], // Bb major 7
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;
      const now = this.ctx.currentTime;
      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      // Play soft warm pad voices
      currentChord.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        // Warm cathedral filter
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, now);
        filter.Q.setValueAtTime(3, now);

        // Soft swelling envelope
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.07 / currentChord.length, now + 1.8 + idx * 0.2);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + idx * 0.1);
        osc.stop(now + 5.0);
      });

      // Harp-like sparkle chime
      const chimeFreqs = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const randomChime = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];
      
      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(randomChime, now + 0.8);
      chimeGain.gain.setValueAtTime(0.0001, now + 0.8);
      chimeGain.gain.linearRampToValueAtTime(0.03, now + 0.9);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.masterGain);
      chimeOsc.start(now + 0.8);
      chimeOsc.stop(now + 2.5);
    };

    playChord();
    this.timerId = window.setInterval(playChord, 4500);
  }

  public playCelebrationChime() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const arpeggio = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];

    arpeggio.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.001, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 1.3);
    });
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new SacredAudioEngine();
