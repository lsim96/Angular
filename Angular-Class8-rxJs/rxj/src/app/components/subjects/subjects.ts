import { AsyncPipe } from '@angular/common';
import { Component, DestroyRef, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RxjsService } from '../../services/rxjs-service';
import { Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subjects',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './subjects.html',
  styleUrl: './subjects.scss',
})
export class Subjects {
  private dr = inject(DestroyRef);
  private rxjsService = inject(RxjsService);

  fruitsSubject$ = this.rxjsService.fruitsSubject$;

  nameArr = signal<string[]>([]);

  nameValue = model<string>();
  fruitValue = model<string>();

  unsubscribe$ = new Subject<null>();

  ngOnInit() {
    this.rxjsService.nameSubject$
      .pipe(takeUntilDestroyed(this.dr))
      .subscribe((value) => {
        console.log('TAKE UNTIL DESTOYED SUBSCRIPTION');
        this.nameArr.set(value);
      });
    this.rxjsService.getNames();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

  onAddName() {
    if (!this.nameValue()) return;

    this.rxjsService.addName(this.nameValue());

    this.nameValue.set('');
  }

  onAddFruit() {
    if (!this.fruitValue()) return;

    this.rxjsService.addFruit(this.fruitValue());

    this.fruitValue.set('');
  }
}
