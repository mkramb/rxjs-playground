import { mergedObservable } from './examples/merge-observables';

mergedObservable.subscribe({
  complete: () => console.log('complete'),
});
