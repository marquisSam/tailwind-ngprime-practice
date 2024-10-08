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
  bagIsGetting = signal<boolean>(false);
  bagIsCreating = signal<boolean>(false);
  bagIsUpdating = signal<boolean>(false);
  bagIsDeleting = signal<boolean>(false);

  itemIsGetting = signal<boolean>(false);
  itemIsCreating = signal<boolean>(false);
  itemIsUpdating = signal<boolean>(false);
  itemIsDeleting = signal<boolean>(false);
}
