import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingStateService {
  private loadingStates = new Map<string, WritableSignal<boolean>>();

  setLoading(key: string, isLoading: boolean): void {
    if (!this.loadingStates.has(key)) {
      this.loadingStates.set(key, signal(false));
    }
    this.loadingStates.get(key)!.set(isLoading);
  }

  isLoading(key: string): Signal<boolean> {
    if (!this.loadingStates.has(key)) {
      this.loadingStates.set(key, signal(false));
    }
    return this.loadingStates.get(key)!;
  }

  isAnyLoading(): Signal<boolean> {
    return computed(() =>
      Array.from(this.loadingStates.values()).some((state) => state())
    );
  }

  constructor() {}
}
