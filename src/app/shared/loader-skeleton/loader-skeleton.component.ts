import { ChangeDetectionStrategy, Component, computed, input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loader-skeleton',
  templateUrl: './loader-skeleton.component.html',
  styleUrls: ['./loader-skeleton.component.scss'],
  imports: [IonItem, IonLabel, IonList, IonListHeader, IonSkeletonText, IonThumbnail],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderSkeletonComponent implements OnInit {
  skeletonAmount = input<number>(5);
  height = input<string>('60');
  width = input<string>('100')
  items = computed(() => Array.from({ length: this.skeletonAmount() }, (_, i) => i + 1))
  constructor() { }

  ngOnInit() { }

}
