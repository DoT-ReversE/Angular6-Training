import { Router } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { Food } from './../../model/food';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  _uploadPercent: Observable<number>;
  _downloadURL: Observable<string>;
  _food: Food = <Food>{};

  constructor(
    private _afStorage: AngularFireStorage,
    private _afStore: AngularFirestore,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onUploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'food-pictures/' + file.name;
    const fileRef = this._afStorage.ref(filePath);
    const task = this._afStorage.upload(filePath, file);

    this._uploadPercent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize( () => {
        fileRef.getDownloadURL().subscribe( url => this._food.url = url );
      })
    ).subscribe();
  }

  onSaveFood() {
    this._afStore.collection('Food')
    .doc(this._food.name)
    .set(this._food)
    .then( result => {
      this._router.navigate(['admin', 'food-list']);
    }).catch(error => {

    });
  }
}
