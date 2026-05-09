import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  imports: [IonLabel, IonContent, IonInput, IonItem, IonList, IonLabel]
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
onFileSelected(event: any) {
  const file: File = event.target.files[0];

  if (file) {
    this.uploadFile(file);
  }
}

uploadFile(file: File) {
  const formData = new FormData();
  
  // 'image' — це ключ, за яким бекенд буде шукати файл
  formData.append('image', file, file.name);
  
  // Додаткові дані, якщо потрібно (наприклад, ID автора)
  formData.append('authorId', '123');

  const uploadUrl = 'https://your-api.com/upload';

  // this.http.post(uploadUrl, formData).subscribe({
  //   next: (response) => {
  //     console.log('Файл успішно завантажено', response);
  //   },
  //   error: (error) => {
  //     console.error('Помилка завантаження', error);
  //   }
  // });
}
}
