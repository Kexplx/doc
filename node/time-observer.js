import { PerformanceObserver, performance } from "perf_hooks";
import { writeFileSync } from "fs";
import { nanoid } from "nanoid";

interface Measurement {
  name: string;
  duration: number;
}

/**
 * A wrapper for {@link PerformanceObserver}.
 *
 * @example
 * const observer = new Observer();
 * observer.observe();
 *
 * observer.mark("start_functionA");
 * // run functionA
 * observer.mark("end_functionA");
 * observer.measure("Function A total.", "start_functionA", "end_functionA");
 *
 * observer.disconnect();
 * observer.saveToDisk();
 */
export class TimeObserver {
  private measurements: Measurement[];
  private observer: PerformanceObserver;

  constructor() {
    this.measurements = [];

    this.observer = new PerformanceObserver((items) => {
      const { name, duration } = items.getEntries()[0];

      this.measurements.push({ name, duration });
    });
  }

  observe() {
    this.observer.observe({ entryTypes: ["measure"] });
  }

  measure(...args: string[]) {
    const [a0, a1, a2] = args;

    if (args.length == 2) {
      performance.measure(a0, a1);
    } else if (args.length == 3) {
      performance.measure(a0, a1, a2);
    }
  }

  mark(name: string) {
    performance.mark(name);
  }

  disconnect() {
    this.observer.disconnect();
  }

  saveToDisk() {
    const fileName = `measurements-${nanoid().substr(0, 5)}.json`;

    writeFileSync(fileName, JSON.stringify(this.measurements, null, 2));
  }
}
