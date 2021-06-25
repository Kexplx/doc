import { PerformanceObserver, performance } from "perf_hooks";
import { appendFileSync, unlink } from "fs";

interface Measurement {
  name: string;
  duration: number;
}

/**
 * A wrapper around {@link PerformanceObserver}.
 *
 * @example
 * const o = new TimeObserver();
 * o.observe();
 *
 * o.mark("start_functionA");
 * // run functionA
 * o.mark("end_functionA");
 *
 * o.mark("start_functionB");
 * // run functionB
 * o.mark("end_functionB");
 *
 * o.measure("Function A total.", "start_functionA", "end_functionA");
 * o.measure("Function B total.", "start_functionB", "end_functionB");
 *
 * o.disconnect();
 * o.saveToDisk(); // Saves a JSON file with the results.
 */
export class TimeObserver {
  private measurements: Measurement[];
  private isObserving: boolean;
  private observer: PerformanceObserver;

  constructor() {
    this.measurements = [];
    this.isObserving = false;

    this.observer = new PerformanceObserver((items) => {
      const { name, duration } = items.getEntries()[0];

      this.measurements.push({ name, duration });
    });
  }

  observe() {
    if (this.isObserving === false) {
      this.observer.observe({ entryTypes: ["measure"] });

      this.isObserving = true;
    }
  }

  disconnect() {
    if (this.isObserving === true) {
      this.observer.disconnect();

      this.isObserving = false;
    }
  }

  mark(name: string) {
    performance.mark(name);
  }

  measure(...args: string[]) {
    const [a0, a1, a2] = args;

    if (args.length == 2) {
      performance.measure(a0, a1);
    } else if (args.length == 3) {
      performance.measure(a0, a1, a2);
    }
  }

  saveToDisk() {
    const filename = "traces.txt";
    unlink(filename, () => {});

    for (const { name, duration } of this.measurements) {
      appendFileSync(filename, `${name} = ${duration} ms\n`);
    }
  }
}
