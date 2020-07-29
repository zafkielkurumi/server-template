declare module 'brotli' {
  function compress(
    buffer: Buffer,
    opts?:
      | boolean
      | {
          quality: number;
          mode: 1 | 0;
          lgwin: number;
        },
  ): Uint8Array;

  function decompress(buffer: Buffer, output_size?: number): Buffer;
}
