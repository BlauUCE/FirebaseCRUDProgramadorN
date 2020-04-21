import { Component } from '@angular/core';

/* import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; */

import Swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirebaseCRUD';

  /* items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  } */

  alerta() {
    Swal.fire({
      title: 'Mensaje',
      text: 'continue sin problemas',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  miniAlerta() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Correcto'
    })
  }
}


