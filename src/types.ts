/**
 * Simple logger interface compatible with @oclif/command.
 * @ignore
 */
export interface Logger {
  log: (message: string) => void;
  error: (message: string) => void;
}
